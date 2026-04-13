import { h } from 'preact';
import { parseLinks, formatUrlLabel } from '../utils/parseLinks.js';

function formatTime(date) {
  if (!date) return '';
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    }).format(date instanceof Date ? date : new Date(date));
  } catch {
    return '';
  }
}

/** External link icon */
function ExternalLinkIcon() {
  return (
    <svg
      class="cw-link__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Renders message content, turning any URLs into styled clickable links.
 */
function MessageContent({ content }) {
  const parts = parseLinks(content);

  return parts.map((part, i) => {
    if (part.type === 'url') {
      return (
        <a
          key={i}
          href={part.value}
          class="cw-link"
          target="_blank"
          rel="noopener noreferrer"
          title={part.value}
        >
          {formatUrlLabel(part.value)}
          <ExternalLinkIcon />
        </a>
      );
    }
    return part.value;
  });
}

/**
 * A single message bubble with optional avatar and timestamp.
 */
export default function Message({ role, content, isError, timestamp, showTimestamps, hideAvatar, botName, botAvatar }) {
  const isBot = role === 'bot';
  const avatarLetter = isBot
    ? (botName || 'A')[0].toUpperCase()
    : 'U';

  return (
    <div
      class={[
        'cw-message',
        isBot ? 'cw-message--bot' : 'cw-message--user',
        isError ? 'cw-message--error' : '',
        hideAvatar ? 'cw-message--hide-avatar' : '',
      ].filter(Boolean).join(' ')}
    >
      <div class="cw-message__avatar" aria-hidden="true">
        {isBot && botAvatar ? (
          <img src={botAvatar} alt={botName || 'Bot'} />
        ) : (
          avatarLetter
        )}
      </div>

      <div class="cw-message__body">
        <div class="cw-message__bubble">
          <MessageContent content={content} />
        </div>
        {showTimestamps && timestamp && (
          <time class="cw-message__time" dateTime={new Date(timestamp).toISOString()}>
            {formatTime(timestamp)}
          </time>
        )}
      </div>
    </div>
  );
}
