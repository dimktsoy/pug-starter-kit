import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import getCommonConfig from './webpack.common';
import { BUILD_DIRECTORY } from '../constans';

const cleanOptions = {
  cleanOnceBeforeBuildPatterns: [BUILD_DIRECTORY],
  verbose: true,
};

export default () => {
  return merge(getCommonConfig(), {
    mode: 'production',
    devtool: false,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new CleanWebpackPlugin(cleanOptions),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: 'styles/[name].[contenthash].css',
      }),
    ],
  });
};
