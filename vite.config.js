import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'News Logo.png'],
      manifest: {
        name: 'Newsapp',
        short_name: 'Newsapp',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#1d4ed8',
        icons: [
          {
            src: 'News Logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'News Logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
