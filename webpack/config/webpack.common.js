import { merge } from 'webpack-merge';
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constans';
import * as modules from '../modules';

export default () => {
  return merge(
    {
      entry: [SOURCE_DIRECTORY],
      output: {
        filename: 'js/[name].[contenthash].js',
        path: BUILD_DIRECTORY,
      },
    },
    modules.loadJavaScript(),
    modules.loadStyles(),
    modules.loadImages(),
    modules.loadFonts(),
    modules.setupHtml()
  );
};
