import { resolve } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    library: 'ReactAudio',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    classnames: 'classnames',
    noop: 'noop',
    'react-condition-mananger': 'react-condition-mananger',
    'next-time-format': 'next-time-format',
    'next-audio': 'next-audio',
    'next-get-key': 'next-get-key',
    'next-pad-start': 'next-pad-start',
    'next-draggable': 'next-draggable',
    'react-dom': 'react-dom',
    'object-assign': 'object-assign',
    'prop-types': 'prop-types'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SemverWebpackPlugin({ enabled: true }),
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      }
    ])
  ]
});
