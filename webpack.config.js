const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: __dirname + '/src/app.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/public',
	},
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: __dirname + '/public',
		hot: true,
		open: true,
		port: 5000,
		stats: 'minimal',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('tailwindcss'),
								require('autoprefixer'),
							],
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
