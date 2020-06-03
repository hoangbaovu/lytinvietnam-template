const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

  devtool: 'source-map',

  output: {
    pathinfo: true,
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: "/"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
  ],
});
