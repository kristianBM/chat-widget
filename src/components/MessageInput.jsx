import { useRef, useState, useCallback } from 'preact/hooks';
import { processImage, attachmentToDataUrl } from '../utils/image.js';

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

function AttachIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.93 8.83l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cw-spinner">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="40 60" />
    </svg>
  );
}

/**
 * Uncontrolled auto-resizing textarea with send button and image attachment support.
 */
export default function MessageInput({ onSend, disabled, placeholder }) {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [attachments, setAttachments] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const reset = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.value = '';
      el.style.height = 'auto';
    }
    setAttachments([]);
    setError('');
  }, []);

  const handleSend = useCallback(() => {
    const text = (textareaRef.current?.value || '').trim();
    if (disabled || isProcessing) return;
    if (!text && attachments.length === 0) return;
    onSend(text, attachments);
    reset();
  }, [disabled, isProcessing, attachments, onSend, reset]);

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

  const handleAttachClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFiles = useCallback(async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = ''; // reset so picking same file twice still fires change
    if (files.length === 0) return;

    setIsProcessing(true);
    setError('');
    try {
      const processed = await Promise.all(files.map((f) => processImage(f)));
      setAttachments((prev) => [...prev, ...processed]);
    } catch (err) {
      setError(err?.message || 'Failed to process image');
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const removeAttachment = useCallback((index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const canSend = !disabled && !isProcessing;

  return (
    <div class="cw-input-area">
      {error && (
        <div class="cw-input-error" role="alert">{error}</div>
      )}

      {attachments.length > 0 && (
        <div class="cw-attachments-preview">
          {attachments.map((att, i) => (
            <div key={i} class="cw-attachment-thumb" title={att.name}>
              <img src={attachmentToDataUrl(att)} alt={att.name} />
              <button
                type="button"
                class="cw-attachment-thumb__remove"
                onClick={() => removeAttachment(i)}
                aria-label="Remove attachment"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div class="cw-input-wrapper">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          class="cw-file-input"
          aria-hidden="true"
          tabIndex={-1}
        />
        <button
          type="button"
          class="cw-attach-btn"
          onClick={handleAttachClick}
          disabled={!canSend}
          aria-label="Attach image"
          title="Attach image"
        >
          {isProcessing ? <SpinnerIcon /> : <AttachIcon />}
        </button>
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
          type="button"
          class="cw-send-btn"
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Send message"
          title="Send message (Enter)"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
