import { h } from 'preact';

/**
 * Format a Date object to a short readable time string (e.g. "2:34 PM").
 * @param {Date} date
 * @returns {string}
 */
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

/**
 * A single message bubble with optional avatar and timestamp.
 *
 * @param {object} props
 * @param {'bot'|'user'} props.role
 * @param {string}  props.content
 * @param {boolean} props.isError
 * @param {Date|null} props.timestamp
 * @param {boolean} props.showTimestamps
 * @param {boolean} props.hideAvatar     - Hide avatar for consecutive same-sender messages
 * @param {string}  props.botName
 * @param {string|null} props.botAvatar
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
          {content}
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
