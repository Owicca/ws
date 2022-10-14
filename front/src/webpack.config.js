const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV='production';

module.exports = {
  mode: 'production',
  entry: {
    'app': path.resolve(__dirname, 'app/js/index.js'), 
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-react-app'],
          }
        }
      }
    ]
  }
};
