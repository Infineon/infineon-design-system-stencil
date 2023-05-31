import { defineConfig } from 'vite'

export default defineConfig({

  server: {

    watch: {
      // Watch the 'dist' folder for changes
      include: 'dist/**',
    },
  },
})
