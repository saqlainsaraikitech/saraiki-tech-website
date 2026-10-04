import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 6000,
    // Keep classic CSS syntax (max-width etc.) so older mobile browsers apply it.
    cssTarget: 'chrome80',
  },
})
