/**
 * Chat Widget — Library Entry Point
 *
 * Exports `create` and `destroy` functions.
 * Also sets `window.ChatWidget` so UMD consumers can call ChatWidget.create().
 *
 * CSS is imported as an inline string via Vite's `?inline` query.
 * This way the widget injects its own styles and clients only need one <script> tag.
 */

import { h, render } from 'preact';
import ChatWidgetComponent from './components/ChatWidget.jsx';
import rawStyles from './widget.css?inline';

let _container = null;
let _styleEl = null;

/**
 * Inject the widget CSS into the document <head>.
 * Only injected once even if create() is called multiple times.
 */
function injectStyles(customCSS = '') {
  if (_styleEl) return; // already injected

  _styleEl = document.createElement('style');
  _styleEl.setAttribute('data-chat-widget', '');
  _styleEl.textContent = rawStyles + (customCSS ? '\n' + customCSS : '');
  document.head.appendChild(_styleEl);
}

/**
 * Create and mount the chat widget.
 *
 * @param {object} config
 * @param {string}  config.webhookUrl          Required. Webhook endpoint.
 * @param {string}  [config.title='Support']
 * @param {string}  [config.subtitle]
 * @param {string}  [config.botName='Assistant']
 * @param {string|null} [config.botAvatar]     URL or null
 * @param {string[]} [config.initialMessages]
 * @param {string}  [config.placeholder]
 * @param {boolean} [config.autoOpen=false]
 * @param {boolean} [config.persistSession=true]
 * @param {boolean} [config.showTimestamps=true]
 * @param {number}  [config.typingDelay=1000]
 * @param {object}  [config.webhookHeaders={}]
 * @param {object}  [config.requestPayload={}]
 * @param {object}  [config.theme={}]
 * @param {object}  [config.i18n={}]
 * @param {string}  [config.customCSS='']
 * @param {function|null} [config.onOpen]
 * @param {function|null} [config.onClose]
 * @param {function|null} [config.onMessage]
 * @param {function|null} [config.onError]
 */
export function create(config = {}) {
  if (!config.webhookUrl) {
    console.error('[ChatWidget] `webhookUrl` is required.');
    return;
  }

  // Destroy any existing instance first
  destroy();

  // Inject CSS (once)
  injectStyles(config.customCSS || '');

  // Create mount point
  _container = document.createElement('div');
  _container.setAttribute('id', 'chat-widget-root');
  document.body.appendChild(_container);

  // Render Preact component
  render(h(ChatWidgetComponent, config), _container);
}

/**
 * Remove the chat widget from the DOM and clean up.
 */
export function destroy() {
  if (_container) {
    render(null, _container);
    _container.remove();
    _container = null;
  }
  // We intentionally leave the <style> tag in place to avoid a flash of unstyled
  // content if destroy/create is called in quick succession.
}

// Expose on window for UMD / plain script tag usage
if (typeof window !== 'undefined') {
  window.ChatWidget = { create, destroy };
}
