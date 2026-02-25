import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [angular() as any],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.spec.ts'],
    exclude: ['dist/**', 'node_modules/**', 'standalone/dist/**'],
    server: {
      deps: {
        inline: [
          '@angular/core',
          '@angular/common',
          '@angular/compiler',
          '@angular/forms',
          '@angular/platform-browser',
          '@angular/platform-browser/testing',
          '@angular/core/testing',
        ],
      },
    },
  },
});
