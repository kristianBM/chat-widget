/**
 * Session persistence utilities using localStorage.
 * Key: 'cw_session'
 * Stores: { sessionId, messages[] }
 * Max messages kept: 50
 */

const STORAGE_KEY = 'cw_session';
const MAX_MESSAGES = 50;

/**
 * Generate a unique session ID.
 * @returns {string}
 */
export function generateSessionId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Load the persisted session from localStorage.
 * Returns null if nothing is saved or parsing fails.
 * @returns {{ sessionId: string, messages: Array } | null}
 */
export function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data.sessionId || !Array.isArray(data.messages)) return null;
    return data;
  } catch {
    return null;
  }
}

/**
 * Save the current session to localStorage.
 * Trims messages to MAX_MESSAGES to avoid unbounded growth.
 * @param {string} sessionId
 * @param {Array} messages
 */
export function saveSession(sessionId, messages) {
  try {
    // Strip attachment payloads (base64) before persisting — they can blow past
    // the localStorage quota fast. Keep only a lightweight placeholder so the UI
    // can show "image was here" after reload.
    const sanitized = messages.slice(-MAX_MESSAGES).map((m) => {
      if (!m.attachments || m.attachments.length === 0) return m;
      return {
        ...m,
        attachments: m.attachments.map((a) => ({
          type: a.type,
          name: a.name,
          placeholder: true,
        })),
      };
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sessionId, messages: sanitized }));
  } catch {
    // localStorage might be unavailable (private browsing, quota exceeded, etc.)
  }
}

/**
 * Remove the stored session entirely.
 */
export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // noop
  }
}
