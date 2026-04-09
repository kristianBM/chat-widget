import { h } from 'preact';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import ChatBubble from './ChatBubble.jsx';
import ChatWindow from './ChatWindow.jsx';
import { sendMessage } from '../utils/webhook.js';
import {
  generateSessionId,
  loadSession,
  saveSession,
  clearSession,
} from '../utils/session.js';

let _msgIdCounter = 0;
function nextId() {
  return `msg-${++_msgIdCounter}-${Date.now()}`;
}

/**
 * Build initial bot messages from the config array.
 * @param {string[]} texts
 * @returns {Array}
 */
function buildInitialMessages(texts) {
  return (texts || []).map((content) => ({
    id: nextId(),
    role: 'bot',
    content,
    timestamp: new Date(),
    isError: false,
  }));
}

/**
 * Root component. Manages all widget state.
 *
 * @param {object} config  Full widget config object (see index.js for shape)
 */
export default function ChatWidget(config) {
  const {
    webhookUrl,
    title,
    subtitle,
    botName = 'Assistant',
    botAvatar = null,
    initialMessages = [],
    placeholder = 'Type a message...',
    autoOpen = false,
    persistSession = true,
    showTimestamps = true,
    typingDelay = 1000,
    webhookHeaders = {},
    requestPayload = {},
    theme = {},
    i18n = {},
    onOpen,
    onClose,
    onMessage,
    onError,
  } = config;

  // ---- State ----
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [sessionId, setSessionId] = useState(() => generateSessionId());

  // Track open state in a ref for use inside callbacks
  const isOpenRef = useRef(isOpen);
  useEffect(() => { isOpenRef.current = isOpen; }, [isOpen]);

  // ---- On mount: restore or initialize ----
  useEffect(() => {
    if (persistSession) {
      const saved = loadSession();
      if (saved && saved.messages.length > 0) {
        setSessionId(saved.sessionId);
        setMessages(saved.messages.map((m) => ({
          ...m,
          timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
        })));
        return;
      }
    }
    // Fresh start: show initial messages
    if (initialMessages.length > 0) {
      setMessages(buildInitialMessages(initialMessages));
    }
  }, []); // run once

  // ---- Persist session whenever messages or sessionId changes ----
  useEffect(() => {
    if (persistSession && messages.length > 0) {
      saveSession(sessionId, messages);
    }
  }, [messages, sessionId, persistSession]);

  // ---- Track unread bot messages ----
  const prevMessagesLenRef = useRef(messages.length);
  useEffect(() => {
    const prevLen = prevMessagesLenRef.current;
    prevMessagesLenRef.current = messages.length;

    if (!isOpenRef.current && messages.length > prevLen) {
      // Count newly added bot messages
      const newBotMessages = messages.slice(prevLen).filter((m) => m.role === 'bot').length;
      if (newBotMessages > 0) {
        setUnreadCount((n) => n + newBotMessages);
      }
    }
  }, [messages]);

  // ---- Handlers ----
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setUnreadCount(0);
    if (typeof onOpen === 'function') onOpen();
  }, [onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (typeof onClose === 'function') onClose();
  }, [onClose]);

  const handleToggle = useCallback(() => {
    if (isOpenRef.current) {
      handleClose();
    } else {
      handleOpen();
    }
  }, [handleOpen, handleClose]);

  const handleSend = useCallback(async (text) => {
    if (!text.trim() || isDisabled) return;

    const userMsg = {
      id: nextId(),
      role: 'user',
      content: text,
      timestamp: new Date(),
      isError: false,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setIsDisabled(true);

    if (typeof onMessage === 'function') {
      onMessage({ role: 'user', content: text });
    }

    // Simulate minimum typing delay for UX
    const typingStart = Date.now();

    try {
      const reply = await sendMessage({
        webhookUrl,
        sessionId,
        message: text,
        headers: webhookHeaders,
        requestPayload,
      });

      // Wait out remaining typing delay
      const elapsed = Date.now() - typingStart;
      const remaining = Math.max(0, typingDelay - elapsed);
      if (remaining > 0) {
        await new Promise((r) => setTimeout(r, remaining));
      }

      const botMsg = {
        id: nextId(),
        role: 'bot',
        content: reply,
        timestamp: new Date(),
        isError: false,
      };

      setMessages((prev) => [...prev, botMsg]);

      if (typeof onMessage === 'function') {
        onMessage({ role: 'bot', content: reply });
      }
    } catch (err) {
      const elapsed = Date.now() - typingStart;
      const remaining = Math.max(0, Math.min(typingDelay, 1200) - elapsed);
      if (remaining > 0) {
        await new Promise((r) => setTimeout(r, remaining));
      }

      const errMsg = {
        id: nextId(),
        role: 'bot',
        content: 'Sorry, something went wrong. Please try again.',
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errMsg]);

      if (typeof onError === 'function') {
        onError(err);
      }
    } finally {
      setIsTyping(false);
      setIsDisabled(false);
    }
  }, [webhookUrl, sessionId, webhookHeaders, requestPayload, typingDelay, isDisabled, onMessage, onError]);

  const handleNewConversation = useCallback(() => {
    const newId = generateSessionId();
    setSessionId(newId);
    clearSession();
    setMessages(buildInitialMessages(initialMessages));
    setUnreadCount(0);
    setIsTyping(false);
    setIsDisabled(false);
  }, [initialMessages]);

  // ---- Build position class ----
  const position = theme?.position || 'bottom-right';
  const validPositions = ['bottom-right', 'bottom-left', 'top-right', 'top-left'];
  const posClass = `cw-root--${validPositions.includes(position) ? position : 'bottom-right'}`;

  // ---- Dark mode class ----
  const darkMode = theme?.darkMode;
  const darkClass =
    darkMode === true ? 'cw-root--dark' :
    darkMode === false ? 'cw-root--light' :
    ''; // 'auto' → rely on @media query

  return (
    <div
      class={['cw-root', posClass, darkClass].filter(Boolean).join(' ')}
      style={{
        ...(theme?.primaryColor     && { '--cw-primary':      theme.primaryColor }),
        ...(theme?.primaryTextColor && { '--cw-primary-text': theme.primaryTextColor }),
        ...(theme?.backgroundColor  && { '--cw-bg':           theme.backgroundColor }),
        ...(theme?.textColor        && { '--cw-text':         theme.textColor }),
        ...(theme?.fontFamily       && { '--cw-font':         theme.fontFamily }),
        ...(theme?.borderRadius     && { '--cw-radius':       theme.borderRadius }),
        ...(theme?.bubbleSize       && { '--cw-bubble-size':  theme.bubbleSize }),
        ...(theme?.offsetX          && { '--cw-offset-x':     theme.offsetX }),
        ...(theme?.offsetY          && { '--cw-offset-y':     theme.offsetY }),
      }}
      aria-label="Chat widget"
    >
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        isTyping={isTyping}
        isDisabled={isDisabled}
        title={title || i18n?.title}
        subtitle={subtitle || i18n?.subtitle}
        botName={botName}
        botAvatar={botAvatar}
        showTimestamps={showTimestamps}
        placeholder={placeholder}
        i18n={i18n}
        onClose={handleClose}
        onNewConversation={handleNewConversation}
        onSend={handleSend}
      />

      <ChatBubble
        isOpen={isOpen}
        unreadCount={unreadCount}
        bubbleIcon={theme?.bubbleIcon || null}
        onClick={handleToggle}
      />
    </div>
  );
}
