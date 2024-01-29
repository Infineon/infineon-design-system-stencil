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



  return config;
};
