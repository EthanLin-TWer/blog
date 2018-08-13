export default {
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        exclude: [/model/],
      },
    ],
  ],
  devtool: 'source-map',
  disableServiceWorker: true,
}
