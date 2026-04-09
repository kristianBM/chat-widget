import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import Header from './Header.jsx';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';

/**
 * The main chat window container.
 * Handles mount/unmount animation states.
 *
 * @param {object} props
 * @param {boolean}  props.isOpen
 * @param {Array}    props.messages
 * @param {boolean}  props.isTyping
 * @param {string}   props.inputValue
 * @param {boolean}  props.isDisabled
 * @param {string}   props.title
 * @param {string}   props.subtitle
 * @param {string}   props.botName
 * @param {string|null} props.botAvatar
 * @param {boolean}  props.showTimestamps
 * @param {string}   props.placeholder
 * @param {object}   props.i18n
 * @param {function} props.onClose
 * @param {function} props.onNewConversation
 * @param {function} props.onInputChange
 * @param {function} props.onSend
 */
export default function ChatWindow({
  isOpen,
  messages,
  isTyping,
  isDisabled,
  title,
  subtitle,
  botName,
  botAvatar,
  showTimestamps,
  placeholder,
  i18n,
  onClose,
  onNewConversation,
  onSend,
}) {
  // Track whether the window is actually rendered (for exit animation)
  const [isMounted, setIsMounted] = useState(isOpen);
  const [animClass, setAnimClass] = useState('');
  const prevOpenRef = useRef(isOpen);

  useEffect(() => {
    if (isOpen && !prevOpenRef.current) {
      // Opening
      prevOpenRef.current = true;
      setIsMounted(true);
      requestAnimationFrame(() => setAnimClass('cw-window--enter'));
    } else if (!isOpen && prevOpenRef.current) {
      // Closing
      prevOpenRef.current = false;
      setAnimClass('cw-window--exit');
      const timer = setTimeout(() => {
        setIsMounted(false);
        setAnimClass('');
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div
      class={['cw-window', animClass].filter(Boolean).join(' ')}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Chat'}
    >
      <Header
        title={title}
        subtitle={subtitle}
        botName={botName}
        botAvatar={botAvatar}
        i18n={i18n}
        onClose={onClose}
        onNewConversation={onNewConversation}
      />

      <MessageList
        messages={messages}
        isTyping={isTyping}
        showTimestamps={showTimestamps}
        botName={botName}
        botAvatar={botAvatar}
      />

      <MessageInput
        onSend={onSend}
        disabled={isDisabled}
        placeholder={i18n?.placeholder || placeholder}
      />
    </div>
  );
}
