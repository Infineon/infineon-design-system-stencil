import { fileURLToPath, URL } from 'node:url';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determine base path based on environment
  let base = './';
  
  if (mode === 'production' || process.env.GITHUB_ACTIONS) {
    // For GitHub Pages deployment, use absolute path
    base = process.env.BASE_URL || '/infineon-design-system-stencil/';
  }

  return {
    base,
    exclude: [
      '@ionic/core/loader' //fix weird Vite error "outdated optimize dep"
    ],
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('-'),
          },
        },
      }),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // Add build configuration for better chunk handling
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
});
