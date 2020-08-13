export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /img/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
});
