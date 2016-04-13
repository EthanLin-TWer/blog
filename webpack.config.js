module.exports = {
    entry: {
        bundle: './app/app.js',
        vendor: './app/vendor.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    modulesDirectories: ["node_modules"],
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'stage-1']
          }
        }
      ]
    }

};
