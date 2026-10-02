import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['logo.svg', 'logo.jpg', 'icons/*.png'],
      manifest: {
        name: 'INDI — Integrative Health & Food Analyzer',
        short_name: 'INDI',
        description: 'Scan packaged food barcodes and fresh foods to get personalized health evaluations, nutrition facts, and goal-based recommendations.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#0f172a',
        background_color: '#f8fafc',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/icon-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        categories: ['health', 'food', 'lifestyle']
      },
      workbox: {
        // Cache static assets
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,ico,woff,woff2}'],
        // Exclude dev tools from precache
        globIgnores: ['**/generate.html'],
        // Runtime caching rules
        runtimeCaching: [
          {
            // Cache Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            // Cache Google Fonts webfont files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        // Do NOT cache API requests - let them go to network
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api\/.*/]
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      }
    })
  ],
  server: {
    port: 3000,
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
          'vendor-qrcode': ['html5-qrcode'],
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
