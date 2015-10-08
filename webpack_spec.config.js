var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./spec/incrementerSpec"
  ],
  output: {
    path: path.join(__dirname, "spec"),
    filename: "spec.js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, "spec"),
      loader: "babel"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpg|png)$/,
      loader: "url-loader?limit=8192"
    }]
  }
};