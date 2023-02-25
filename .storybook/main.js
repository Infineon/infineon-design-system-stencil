module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ], addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    '@storybook/addon-viewport',
    // Other Storybook addons
    "./usage-tab/register.js",
  ],
  features: {
    storyStoreV7: true,
    "postcss": false,
    previewMdx2: true

  },
  framework: "@storybook/html",

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push(
      {
        test: /\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader'],

        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require('@babel/preset-typescript').default,
                [require('@babel/preset-react').default, { runtime: 'automatic' }],
                require('@babel/preset-env').default,
              ],
            },
          },
        ],


        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    );

    return config;
  },
  staticDirs: ["../public", "../public-storybook"]
}
