const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    '@babel/polyfill',
    path.join(__dirname, '/src/app.jsx'),
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
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
                // eslint-disable-next-line global-require
                require('tailwindcss'),
                // eslint-disable-next-line global-require
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
