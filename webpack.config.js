const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './app',
    port: 8000
  },
  entry: path.resolve(__dirname, 'app/main.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8000' })
  ]
};
