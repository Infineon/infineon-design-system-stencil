const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    resolve: {
      alias: {
        // This tells Webpack to resolve "~" to the node_modules directory
        '~': path.resolve(__dirname, 'node_modules'),
      },
    },
  });



  //copies the /fonts folder located in the /dist directory (created during a stencil bulid) to storybook-static/fonts
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: '../../packages/components/dist/fonts', to: 'sb-common-assets' }
      ],
    })
  );

  return config;
};
