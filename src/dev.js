/**
 * Development entry point.
 * This file is only used during `vite dev` — it is NOT included in the library build.
 * Calls ChatWidget.create() with a mock configuration so you can iterate on the UI.
 */

import { create } from './index.js';

// Mock webhook that echoes back a friendly response after a short delay.
// In dev we intercept fetch, so this URL doesn't need to be real.
const MOCK_WEBHOOK = 'https://mock.local/webhook';

// Override fetch in dev so we don't need a real backend.
const _originalFetch = window.fetch;
window.fetch = async (url, opts) => {
  if (url === MOCK_WEBHOOK) {
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 800));
    let body;
    try { body = JSON.parse(opts?.body); } catch { body = {}; }
    const replies = [
      "Thanks for your message! I'm here to help.",
      'That\'s a great question. Let me look into that for you.',
      'I understand. Could you tell me a bit more?',
      'Sure thing! I can definitely assist with that.',
      'Got it. Give me just a moment to check on that.',
    ];
    const output = replies[Math.floor(Math.random() * replies.length)];
    return new Response(JSON.stringify({ output }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return _originalFetch(url, opts);
};

create({
  webhookUrl: MOCK_WEBHOOK,
  title: 'Support',
  subtitle: "We're here 24/7",
  botName: 'Assistant',
  botAvatar: null,
  initialMessages: ['Hello! 👋', 'How can I help you today?'],
  placeholder: 'Type a message...',
  autoOpen: false,
  persistSession: false, // disable persistence in dev for clean slate
  showTimestamps: true,
  typingDelay: 800,
  webhookHeaders: {},
  requestPayload: {},
  theme: {
    primaryColor: '#6366f1',
    primaryTextColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#111827',
    fontFamily: 'inherit',
    borderRadius: '16px',
    position: 'bottom-right',
    offsetX: '20px',
    offsetY: '20px',
    bubbleSize: '56px',
    darkMode: 'auto',
    bubbleIcon: null,
  },
  i18n: {
    title: 'Chat',
    subtitle: '',
    placeholder: 'Type a message...',
    newConversation: 'New Conversation',
  },
  customCSS: '',
  onOpen: () => console.log('[ChatWidget] opened'),
  onClose: () => console.log('[ChatWidget] closed'),
  onMessage: (msg) => console.log('[ChatWidget] message:', msg),
  onError: (err) => console.error('[ChatWidget] error:', err),
});
