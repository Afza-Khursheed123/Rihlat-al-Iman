
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/',


 build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    manifest: true,
    rollupOptions: {
      // Add react-router-hash-link to external dependencies
      external: ['react-router-hash-link']
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})
