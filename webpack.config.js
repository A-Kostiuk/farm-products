const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './docs'), // путь к каталогу выходных файлов - папка public
    publicPath: '/docs/',
    filename: 'main.bundle.js', // название создаваемого файла
  },
  entry: './source/index.js',
  module: {
    rules: [
      {
        test: /\.cmp.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(.png|((?<!.cmp).svg)|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, 'source'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/html/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/docs/'),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
