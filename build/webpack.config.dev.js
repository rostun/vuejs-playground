'use strict'

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: [
      './src/app.js'
   ],
   devServer: {
      hot: true,
      watchOptions: {
         poll: true,
      },
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
            use: 'vue-loader'
         }
      ],
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
         filename: 'index.html',
         template: 'index.html',
         inject: true,
      }),
   ],
};