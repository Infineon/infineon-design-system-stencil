import { dirname, join } from "path";
// .storybook/main.ts


module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-babel")
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