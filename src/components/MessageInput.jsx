import { h } from 'preact';
import { useRef, useCallback } from 'preact/hooks';

/** Send arrow icon */
function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Uncontrolled auto-resizing textarea with send button.
 * Manages its own value internally via ref — no controlled input / Preact sync issues.
 */
export default function MessageInput({ onSend, disabled, placeholder }) {
  const textareaRef = useRef(null);

  const reset = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.value = '';
    el.style.height = 'auto';
  }, []);

  const handleSend = useCallback(() => {
    const el = textareaRef.current;
    const text = el?.value?.trim();
    if (!text || disabled) return;
    onSend(text);
    reset();
  }, [disabled, onSend, reset]);

  const handleInput = useCallback((e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return (
    <div class="cw-input-area">
      <div class="cw-input-wrapper">
        <textarea
          ref={textareaRef}
          class="cw-textarea"
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Type a message...'}
          disabled={disabled}
          rows={1}
          aria-label="Message input"
          aria-multiline="true"
        />
        <button
          class="cw-send-btn"
          onClick={handleSend}
          disabled={disabled}
          aria-label="Send message"
          title="Send message (Enter)"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
