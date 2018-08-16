export default {
  hashHistory: true,
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        exclude: [
          /model\.js$/,
          /service\.js$/,
          /actions\.js$/,
          /features\.js$/,
        ],
      },
    ],
  ],
  devtool: 'source-map',
}
