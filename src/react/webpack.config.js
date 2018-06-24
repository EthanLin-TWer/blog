const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // TODO: [Linesh][2018/6/24] not quite modularized to put dist in two upper directories
    path: path.resolve(__dirname, '../../dist'),
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
}
