import { h } from 'preact';

/** Pencil/new conversation icon */
function NewConvIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Chevron-down / close icon */
function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Chat window header.
 *
 * @param {object} props
 * @param {string}      props.title
 * @param {string}      props.subtitle
 * @param {string}      props.botName
 * @param {string|null} props.botAvatar
 * @param {object}      props.i18n
 * @param {function}    props.onClose
 * @param {function}    props.onNewConversation
 */
export default function Header({ title, subtitle, botName, botAvatar, i18n, onClose, onNewConversation }) {
  const displayTitle = title || i18n?.title || 'Chat';
  const displaySubtitle = subtitle || i18n?.subtitle || '';
  const avatarLetter = (botName || displayTitle || 'A')[0].toUpperCase();

  return (
    <header class="cw-header">
      <div class="cw-header__top">
        <div class="cw-header__info">
          <div class="cw-header__avatar">
            {botAvatar ? (
              <img src={botAvatar} alt={botName || 'Bot avatar'} />
            ) : (
              avatarLetter
            )}
          </div>
          <div class="cw-header__text">
            <div class="cw-header__title">{displayTitle}</div>
            {displaySubtitle && (
              <div class="cw-header__subtitle">{displaySubtitle}</div>
            )}
          </div>
        </div>

        <div class="cw-header__actions">
          <button
            class="cw-icon-btn"
            onClick={onNewConversation}
            title={i18n?.newConversation || 'New Conversation'}
            aria-label={i18n?.newConversation || 'New Conversation'}
          >
            <NewConvIcon />
          </button>
          <button
            class="cw-icon-btn"
            onClick={onClose}
            title="Close chat"
            aria-label="Close chat"
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
