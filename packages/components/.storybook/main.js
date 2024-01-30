// .storybook/main.ts

import remarkGfm from 'remark-gfm';

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs/web-components',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Development',
  },
  // staticDirs: ['../public-storybook'],

};