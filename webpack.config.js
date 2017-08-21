var path = require('path');

module.exports = {
  entry: './app/src/index',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, './app/build'),
    publicPath:  path.join(__dirname, './app'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
