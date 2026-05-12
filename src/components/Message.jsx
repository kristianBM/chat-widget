import { parseLinks, formatUrlLabel } from '../utils/parseLinks.js';
import { attachmentToDataUrl } from '../utils/image.js';

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

function ExternalLinkIcon() {
  return (
    <svg class="cw-link__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

function ImagePlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="m21 15-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

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
          aria-label={`${part.label || formatUrlLabel(part.value)} (opens in new tab)`}
        >
          {part.label || formatUrlLabel(part.value)}
          <ExternalLinkIcon />
        </a>
      );
    }
    return part.value;
  });
}

function MessageAttachments({ attachments }) {
  if (!attachments || attachments.length === 0) return null;

  const placeholders = attachments.filter((a) => a.placeholder);
  const images = attachments.filter((a) => !a.placeholder && a.type === 'image' && a.data);

  const total = images.length;
  const MAX_VISIBLE = 4;
  const visible = images.slice(0, MAX_VISIBLE);
  const hiddenCount = Math.max(0, total - MAX_VISIBLE);

  const layoutClass =
    total <= 1 ? 'cw-message__attachments--single' :
    total === 2 ? 'cw-message__attachments--two' :
    total === 3 ? 'cw-message__attachments--three' :
    'cw-message__attachments--grid';

  return (
    <>
      {placeholders.map((att, i) => (
        <div key={`p-${i}`} class="cw-attachment-placeholder" title={att.name || ''}>
          <ImagePlaceholderIcon />
          <span>{att.name || 'Image'}</span>
        </div>
      ))}

      {total > 0 && (
        <div class={`cw-message__attachments ${layoutClass}`}>
          {visible.map((att, i) => {
            const src = attachmentToDataUrl(att);
            const isLast = i === visible.length - 1;
            const showOverlay = isLast && hiddenCount > 0;
            return (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                class="cw-attachment-tile"
                aria-label={att.name || 'Image attachment'}
              >
                <img src={src} alt={att.name || 'Image'} />
                {showOverlay && (
                  <span class="cw-attachment-tile__overlay" aria-hidden="true">+{hiddenCount}</span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function Message({ role, content, attachments, isError, timestamp, showTimestamps, hideAvatar, botName, botAvatar }) {
  const isBot = role === 'bot';
  const avatarLetter = isBot ? (botName || 'A')[0].toUpperCase() : 'U';
  const hasAttachments = attachments && attachments.length > 0;
  const hasContent = !!content;

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
        <div class={`cw-message__bubble ${hasAttachments && !hasContent ? 'cw-message__bubble--media-only' : ''}`}>
          <MessageAttachments attachments={attachments} />
          {hasContent && <div class="cw-message__text"><MessageContent content={content} /></div>}
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
