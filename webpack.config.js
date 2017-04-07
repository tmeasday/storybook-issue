var webpack = require('webpack');
var path = require('path');

// output directory
var BUILD_DIR = path.resolve(__dirname + '/public');

// source directory
var APP_DIR = path.resolve(__dirname + '/src');
var config = {
  entry: APP_DIR + '/index.js',
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query : {
       presets: ['es2015', 'react']
     }
    }]
  },
  plugins: [
    // Provides without needing import:
    new webpack.ProvidePlugin({
      React: 'react',
      Compoent: 'lodash'
    }),
  ]
}

module.exports = config;
