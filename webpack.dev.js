const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   entry: './src/index.js',
   devServer: {
      static: './dist',
    }
}); 