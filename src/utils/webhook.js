/**
 * Webhook utilities.
 * Sends a POST request in the n8n-compatible format and normalises the response
 * into a plain string regardless of which key the server uses.
 */

/**
 * Send a chat message to the configured webhook endpoint.
 *
 * @param {object} opts
 * @param {string} opts.webhookUrl
 * @param {string} opts.sessionId
 * @param {string} opts.message
 * @param {object} [opts.headers={}]       Extra HTTP headers
 * @param {object} [opts.requestPayload={}] Extra body fields merged into the request
 * @returns {Promise<string>} The bot's reply as a plain string
 */
export async function sendMessage({ webhookUrl, sessionId, message, headers = {}, requestPayload = {} }) {
  const body = JSON.stringify({
    action: 'sendMessage',
    sessionId,
    chatInput: message,
    ...requestPayload,
  });

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Webhook returned HTTP ${response.status}: ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') || '';

  // Handle plain-text responses
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    return text.trim() || 'No response received.';
  }

  const data = await response.json();

  return extractText(data);
}

/**
 * Extract a text string from various response shapes servers might return.
 * Handles: { output }, { text }, { message }, { response }, { reply },
 * arrays of the above, and bare strings.
 *
 * @param {*} data
 * @returns {string}
 */
function extractText(data) {
  if (typeof data === 'string') return data.trim();

  // Unwrap single-element arrays
  if (Array.isArray(data)) {
    if (data.length === 0) return 'No response received.';
    return extractText(data[0]);
  }

  if (data && typeof data === 'object') {
    const keys = ['output', 'text', 'message', 'response', 'reply'];
    for (const key of keys) {
      if (data[key] !== undefined && data[key] !== null) {
        return extractText(data[key]);
      }
    }
    // Last resort: stringify
    return JSON.stringify(data);
  }

  return String(data ?? 'No response received.');
}
