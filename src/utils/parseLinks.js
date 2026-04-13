/**
 * Splits a text string into alternating plain-text and URL segments.
 * URLs are detected by the http(s):// scheme and cleaned of trailing punctuation.
 *
 * @param {string} text
 * @returns {Array<{ type: 'text'|'url', value: string }>}
 */
export function parseLinks(text) {
  if (!text) return [];

  const urlRegex = /(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = urlRegex.exec(text)) !== null) {
    // Text before the URL
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }

    // Strip trailing punctuation and markdown syntax that is likely not part of the URL
    const url = match[0].replace(/[.,;:!?)\]'"*_`]+$/, '');
    const trailingChars = match[0].slice(url.length);

    parts.push({ type: 'url', value: url });

    // Put back any stripped trailing characters as plain text
    if (trailingChars) {
      parts.push({ type: 'text', value: trailingChars });
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text after the last URL
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return parts;
}

/**
 * Returns a shorter display label for a URL (domain + truncated path).
 * e.g. "https://www.example.com/some/very/long/path" → "example.com/some/very/lon…"
 *
 * @param {string} url
 * @param {number} [maxLength=48]
 * @returns {string}
 */
export function formatUrlLabel(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
