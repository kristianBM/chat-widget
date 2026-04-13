/**
 * Splits a text string into alternating plain-text and URL segments.
 * Handles both:
 *  - Markdown links:  [label](https://example.com)  → uses label as display text
 *  - Plain URLs:      https://example.com            → uses hostname as display text
 *
 * @param {string} text
 * @returns {Array<{ type: 'text'|'url', value: string, label?: string }>}
 */
export function parseLinks(text) {
  if (!text) return [];

  // Match markdown links first, then plain URLs
  const combinedRegex = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)|(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = combinedRegex.exec(text)) !== null) {
    // Text before this match
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }

    if (match[1] !== undefined) {
      // Markdown link [label](url) — use the label as display text
      const url = match[2].replace(/[.,;:!?)\]'"*_`]+$/, '');
      const label = match[1].trim() || formatUrlLabel(url);
      parts.push({ type: 'url', value: url, label });
    } else {
      // Plain URL — strip trailing punctuation / markdown syntax
      const url = match[3].replace(/[.,;:!?)\]'"*_`]+$/, '');
      const trailingChars = match[3].slice(url.length);
      parts.push({ type: 'url', value: url });
      if (trailingChars) {
        parts.push({ type: 'text', value: trailingChars });
      }
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last match
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return parts;
}

/**
 * Returns just the hostname from a URL, without the www. prefix.
 * e.g. "https://www.example.com/path" → "example.com"
 *
 * @param {string} url
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
