module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
