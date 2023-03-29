import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      injectOptions: {
        data: {
          folderTimestamp: Date.now()
        }
      }
    })
  ],
  server: {
    watch: {
      // Watch the 'dist' folder for changes
      include: 'dist/**',
    },
  },
})
