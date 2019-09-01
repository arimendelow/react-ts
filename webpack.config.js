const webpack = require('webpack');
const path = require('path');

module.exports = {
  // put sourcemaps inline
  devtool: 'eval',

  // entry point of our app, within the 'src' directory
  entry:['index.tsx'],

  // configure the output dir and publicPath for the devServer
  output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve('dist'),
  },

  // configure the dev server to run
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },

  // tell Webpack to load TS files
  resolve: {
    // look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx.', '.js'],

    // add 'src' to the modules, so that when we import files we can do so with 'src' as the relative route
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      // .ts(x) files should first pass through the TS loader, and then through babel
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src'),
      },
    ],
  },
};
