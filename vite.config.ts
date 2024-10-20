import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgr(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
