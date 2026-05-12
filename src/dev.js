/**
 * Development entry point.
 * Used by `vite dev` only — NOT included in the library build.
 */

import { create } from './index.js';

create({
  webhookUrl: 'https://akabadger.app.n8n.cloud/webhook/79e9af94-202d-46ed-8c62-1ff5043b0d68/chat',
  title: 'Support',
  subtitle: "We're here 24/7",
  botName: 'Assistant',
  botAvatar: null,
  initialMessages: ['Hello! 👋', 'How can I help you today?'],
  placeholder: 'Type a message...',
  autoOpen: false,
  persistSession: false,
  showTimestamps: true,
  typingDelay: 800,
  webhookHeaders: {},
  requestPayload: {},
  theme: {
    primaryColor: '#6366f1',
    primaryTextColor: '#ffffff',
    position: 'bottom-right',
    offsetX: '20px',
    offsetY: '20px',
    bubbleSize: '56px',
    darkMode: 'auto',
  },
  onOpen: () => console.log('[ChatWidget] opened'),
  onClose: () => console.log('[ChatWidget] closed'),
  onMessage: (msg) => console.log('[ChatWidget] message:', msg),
  onError: (err) => console.error('[ChatWidget] error:', err),
});
