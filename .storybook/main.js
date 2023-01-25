module.exports = {
  "stories": [
    "../src/components/button/*.stories.mdx",
    "../src/components/button/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/card/*.stories.mdx",
    "../src/components/card/*.stories.@(js|jsx|ts|tsx)"
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
   ],
  "features": {
    storyStoreV7: true,
    "postcss": false,
  },
  "framework": "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
  staticDirs: ["../public", "../public-storybook"]
}
