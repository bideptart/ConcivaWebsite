import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic'
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
        }
      }
    }
  }
});