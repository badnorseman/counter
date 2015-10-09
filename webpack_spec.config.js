"use strict";

var webpack = require("webpack");

module.exports = {
  entry: [
    "./spec/CounterSpec.js",
    "./spec/IncrementerSpec.js",
    "./spec/NameSpec.js"
  ],

  output: {
    path: "./spec",
    filename: "spec.js",
    publicPath: "/test"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};