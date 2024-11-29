import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  server: {
    watch: {
      // Watch the 'dist' folder for changes
      include: 'dist/**',
    },
  },
})
