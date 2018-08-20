const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: 'src/react/index.html',
  filename: 'index.html',
})

module.exports = {
  entry: './src/react/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    contentBase: path.join(__dirname, 'src/react'),
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
}
