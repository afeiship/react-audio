import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    filename: 'index.js'
  },
  externals: {
    react: 'react',
    classnames: 'classnames',
    noop: 'noop',
    'next-audio': 'next-audio',
    'next-time-format': 'next-time-format',
    'react-dom': 'react-dom',
    'object-assign': 'object-assign',
    'prop-types': 'prop-types'
  },
  plugins: [
    new SemverWebpackPlugin({
      enabled: true,
      callback: function(inVersion) {
        return this.valid(this.coerce(inVersion));
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      }
    ])
  ]
});
