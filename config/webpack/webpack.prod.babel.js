//set the mode to production.
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

import paths from './paths';

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: paths.root,
    }),
  ],
  devtool: 'source-map',
};
//[paths.outputPath.split('/').pop()],
