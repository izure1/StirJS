'use strict';

const path = require('path');
const glob = require('glob');

const CircularDependencyPlugin = require('circular-dependency-plugin');

const entry_stir = glob.sync('./src/Stir/**/*.js');
const entry_box2d = glob.sync('./src/external/box2d/**/*.js');

module.exports = {
  mode: 'development',
  entry: {
    'Stir': entry_stir,
    //'box2d': entry_box2d
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.join(__dirname),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.c$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  ]
};