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
  devtools: 'source-map',
  disableServiceWorker: true,
}
