import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import Message from './Message.jsx';
import TypingIndicator from './TypingIndicator.jsx';

/**
 * Scrollable message list.
 * Auto-scrolls to the bottom when new messages arrive or typing indicator appears.
 *
 * @param {object} props
 * @param {Array}   props.messages
 * @param {boolean} props.isTyping
 * @param {boolean} props.showTimestamps
 * @param {string}  props.botName
 * @param {string|null} props.botAvatar
 */
export default function MessageList({ messages, isTyping, showTimestamps, botName, botAvatar }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages.length, isTyping]);

  return (
    <div class="cw-messages" role="log" aria-live="polite" aria-label="Chat messages">
      {messages.map((msg, index) => {
        // Hide avatar for consecutive same-sender messages (except the last one)
        const nextMsg = messages[index + 1];
        const hideAvatar = nextMsg && nextMsg.role === msg.role;

        return (
          <Message
            key={msg.id}
            role={msg.role}
            content={msg.content}
            isError={msg.isError}
            timestamp={msg.timestamp}
            showTimestamps={showTimestamps}
            hideAvatar={hideAvatar}
            botName={botName}
            botAvatar={botAvatar}
          />
        );
      })}

      {isTyping && (
        <TypingIndicator botName={botName} botAvatar={botAvatar} />
      )}

      <div ref={bottomRef} style={{ height: 1, flexShrink: 0 }} aria-hidden="true" />
    </div>
  );
}
