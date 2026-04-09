import { h } from 'preact';

/**
 * Three-dot typing animation shown while waiting for bot response.
 *
 * @param {object} props
 * @param {string}      props.botName
 * @param {string|null} props.botAvatar
 */
export default function TypingIndicator({ botName, botAvatar }) {
  const avatarLetter = (botName || 'A')[0].toUpperCase();

  return (
    <div class="cw-typing" aria-label="Bot is typing" role="status">
      <div class="cw-typing__avatar">
        {botAvatar ? (
          <img src={botAvatar} alt={botName || 'Bot'} />
        ) : (
          avatarLetter
        )}
      </div>
      <div class="cw-typing__bubble">
        <span class="cw-typing__dot" />
        <span class="cw-typing__dot" />
        <span class="cw-typing__dot" />
      </div>
    </div>
  );
}
