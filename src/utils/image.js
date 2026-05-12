/**
 * Image processing utilities.
 * Validates, resizes, and converts images to base64 for transport.
 */

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB original limit
const MAX_DIMENSION = 1600;                  // resize cap
const JPEG_QUALITY = 0.85;

/**
 * Process a File object: validate, resize, compress, convert to base64.
 * Returns an attachment object ready to send / display.
 *
 * @param {File} file
 * @returns {Promise<{ type: 'image', mime: string, data: string, name: string }>}
 */
export async function processImage(file) {
  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files are supported');
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new Error('Image is larger than 5MB');
  }

  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(objectUrl);

    const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
    const width = Math.max(1, Math.round(img.width * scale));
    const height = Math.max(1, Math.round(img.height * scale));

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);

    // GIFs and PNGs with transparency stay as-is; otherwise re-encode as JPEG for size
    const mime = file.type === 'image/gif' || file.type === 'image/png' ? file.type : 'image/jpeg';
    const dataUrl = canvas.toDataURL(mime, JPEG_QUALITY);
    const data = dataUrl.split(',')[1] || '';

    return { type: 'image', mime, data, name: file.name };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = src;
  });
}

/**
 * Build a `data:` URL from an attachment for inline rendering.
 * @param {{ mime: string, data: string }} attachment
 * @returns {string}
 */
export function attachmentToDataUrl(attachment) {
  return `data:${attachment.mime};base64,${attachment.data}`;
}
