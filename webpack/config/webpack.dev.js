import { merge } from 'webpack-merge';
import getCommonConfig from './webpack.common';
import { PORT, BUILD_DIRECTORY } from '../constans';

export default () => {
  return merge(getCommonConfig(), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: BUILD_DIRECTORY,
      port: PORT,
      hot: false,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  });
};
