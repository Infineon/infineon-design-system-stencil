const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });


  return config;
};
