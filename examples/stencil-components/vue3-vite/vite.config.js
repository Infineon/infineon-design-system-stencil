import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    {
      name: 'sass-plugin',
      enforce: 'pre',
      async transform(code, id) {
        if (id.endsWith('.scss')) {
          const { default: sass } = await import('sass');
          const result = sass.renderSync({ file: id });
          return {
            code: result.css.toString(),
          };
        }
      },
    },
  ],
});
