'use strict'

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: [
		'./src/app.js'
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.styl(us)?$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'stylus-loader',
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
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
   output: {
      filename: 'hhh.bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};