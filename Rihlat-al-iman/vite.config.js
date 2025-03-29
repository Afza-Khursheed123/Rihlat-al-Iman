
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Force all assets to be separate files
    manifest: true // Generate asset manifest
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})