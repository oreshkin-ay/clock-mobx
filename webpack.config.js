
const path = require('path');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const isProd = !isDev;

const getNameMask = () => isDev ? '[name].bundle' : '[name].[contenthash].bundle';

const getOptimisation = () => {
	const optimisation = {
		splitChunks: {
			chunks: 'all'
		}
	};

	if(isProd) {
		optimisation.minimizer = [
			new TerserWebpackPlugin()
		]
	}

	return optimisation;
};


const getPlugins = () => {
	const plugins = [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'assets/index.html'),
			favicon: path.resolve(__dirname, 'assets/favicon.ico'),
			title: 'Clock',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'assets/favicon.ico'),
					to: path.resolve(__dirname, 'build')
				},
				{
					from:path.resolve(__dirname, 'assets/css.css'),
					to: path.resolve(__dirname, 'build')
				}
			]
		}),
		new MiniCSSExtractPlugin({filename: `${getNameMask()}.css` }),
		new DefinePlugin({ 'process.env.DEV': JSON.stringify(isDev)})
	];

	if(isDev) {
		plugins.push(new ESLintPlugin({extensions: ['js', 'jsx']}));
	}

	return plugins;

}


module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode,
	target: 'web',
	entry: {
		main: ['@babel/polyfill', './index.jsx']
	},
	output: {
		filename: `${getNameMask()}.js`,
		path: path.resolve(__dirname, 'build')
	},
	devtool: isDev ? 'source-map' : 'nosources-source-map',
	resolve: {
		modules: ["src", "node_modules"],
		extensions: ['.js', '.jsx']
	},
	optimization: getOptimisation(),
	devServer: {
		port: 8080,
		hot: isDev
	},
	plugins: getPlugins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: MiniCSSExtractPlugin.loader,
					options: {
						emit: isDev
					}
				},
				'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [{
					loader: MiniCSSExtractPlugin.loader,
					options: {
						emit: isDev
					}
				},
				'css-loader',
				'sass-loader']
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					]
				}
			}]
			}
		]
	}
}
