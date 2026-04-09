import { h } from 'preact';

/** Chat icon SVG (speech bubble) */
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M8 10h8M8 14h5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.953 9.953 0 0 0 12 22z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Close icon SVG */
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The floating action button that toggles the chat window.
 *
 * @param {object} props
 * @param {boolean}  props.isOpen
 * @param {number}   props.unreadCount
 * @param {string|null} props.bubbleIcon  Custom image URL for the bubble
 * @param {function} props.onClick
 */
export default function ChatBubble({ isOpen, unreadCount, bubbleIcon, onClick }) {
  return (
    <button
      class="cw-bubble"
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      aria-expanded={isOpen}
    >
      {bubbleIcon && !isOpen ? (
        <img src={bubbleIcon} alt="" class="cw-bubble__img" />
      ) : isOpen ? (
        <CloseIcon />
      ) : (
        <ChatIcon />
      )}

      {!isOpen && unreadCount > 0 && (
        <span class="cw-badge" aria-label={`${unreadCount} unread message${unreadCount !== 1 ? 's' : ''}`}>
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </button>
  );
}
