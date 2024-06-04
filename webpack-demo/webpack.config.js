const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
   },
   plugins: [
      new HtmlWebpackPlugin({ title: 'Development' }),
   ],
   optimization: {
      splitChunks: {
        chunks: 'all',
      },
   },
};
