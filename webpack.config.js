const path = require("path");
const version = require("./package.json").version;

// Source:
// - https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations
// - https://webpack.js.org/guides/public-path/#on-the-fly
// - https://github.com/bqplot/bqplot/blob/master/js/webpack.config.js
// - https://webpack.js.org/configuration/resolve/#resolveextensions
// - https://github.com/bqplot/bqplot/blob/master/js/webpack.lab.config.js

const rules = [{ test: /\.jsx$/, loader: "babel-loader" }];

const externals = ["@jupyter-widgets/base"];

const resolve = {
  extensions: [".jsx", "..."],
};

module.exports = [
  {
    entry: "./src/extension.js",
    output: {
      filename: "extension.js",
      path: path.resolve(__dirname, "ipycolorful", "nbextension"),
      libraryTarget: "amd",
      publicPath: "",
    },
    devtool: false,
    mode: "production",
  },

  {
    entry: "./src/index.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "ipycolorful", "nbextension"),
      libraryTarget: "amd",
      publicPath: "",
    },
    devtool: false,
    module: {
      rules: rules,
    },
    externals,
    resolve,
    mode: "production",
  },

  {
    entry: "./src/index.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "amd",
      publicPath: "https://unpkg.com/ipycolorful@" + version + "/dist/",
    },
    devtool: false,
    module: {
      rules: rules,
    },
    externals,
    resolve,
    mode: "production",
  },
];
