import { dirname, join } from "path";
// .storybook/main.ts

// import remarkGfm from 'remark-gfm';

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         remarkPlugins: [remarkGfm],
    //       },
    //     },
    //   },
    // },
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@storybook/addon-webpack5-compiler-babel"
  ],
  "framework": {
    name: getAbsolutePath("@storybook/html-webpack5"),
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Development',
  },
  staticDirs: ['../public-storybook'],

};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}