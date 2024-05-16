const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path. resolve( __dirname, 'dist'),
      filename: 'main.js',
      clean: true,
   },
   devServer: {
      static: './dist',
    },
   plugins: [new HtmlWebpackPlugin({title: 'Development',})],
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
   },
}; 