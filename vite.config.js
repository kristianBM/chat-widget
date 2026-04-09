import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ChatWidget',
      formats: ['umd', 'es'],
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      // Keep everything bundled (Preact included) for single-script embed
      external: [],
      output: {
        globals: {},
        exports: 'named',
      },
    },
    cssCodeSplit: false,
    // Minify for production
    minify: 'esbuild',
    sourcemap: false,
  },
});
