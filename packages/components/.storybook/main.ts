import type { StorybookConfig } from '@storybook/web-components-vite';

import packageJson from '../package.json' with { type: 'json' };

function getLibraryVersion(): string {
  return packageJson.version;
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  "framework": {
    "name": '@storybook/web-components-vite',
    "options": {}
  },
  "previewHead": (head) => `
    ${head}
    <script type="module" src="/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>
    <script nomodule src="/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>
    <link rel="stylesheet" href="/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">
  `,
  "managerHead": (head) => `
    ${head}
    <style>
      .sidebar-header > div > a::after {
          display: block;
          content: 'Version ${getLibraryVersion()}';
          margin: 20px 0 0 0;
          color: #0A8276;
          font-size: 18px;
          font-weight: bold;
      }
    </style>
  `,
  async viteFinal(config) {
    // Customize the Vite config here
    const {mergeConfig} = await import('vite');
    const {liveReload} = await import('vite-plugin-live-reload');

    return mergeConfig(config, {
      plugins: [
        liveReload(['dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js', 'dist/infineon-design-system-stencil/infineon-design-system-stencil.js']),
      ]
    });
  },
};
export default config;