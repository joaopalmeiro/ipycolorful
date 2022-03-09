const path = require("path");
const version = require("./package.json").version;

// Source:
// - https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations
// - https://webpack.js.org/guides/public-path/#on-the-fly
// - https://github.com/bqplot/bqplot/blob/master/js/webpack.config.js
// - https://webpack.js.org/configuration/resolve/#resolveextensions
// - https://github.com/bqplot/bqplot/blob/master/js/webpack.lab.config.js
// - https://stackoverflow.com/a/42672703
// - https://github.com/jupyter-widgets/widget-ts-cookiecutter/issues/29

const rules = [
  { test: /\.jsx$/, loader: "babel-loader" },
  { test: /\.css$/, use: ["style-loader", "css-loader"] },
];

// Packages that shouldn't be bundled but loaded at runtime.
const externals = ["@jupyter-widgets/base"];

const resolve = {
  extensions: [".jsx", "..."],
};

module.exports = [
  {
    entry: "./src/extension.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "ipycolorful", "nbextension"),
      libraryTarget: "amd",
      publicPath: "",
    },
    module: {
      rules: rules,
    },
    devtool: false,
    externals,
    resolve,
    mode: "production",
  },

  /**
   * Embeddable ipycolorful bundle.
   *
   * This bundle is almost identical to the notebook extension bundle. The only
   * difference is in the configuration of the public path for the static assets.
   *
   * The target bundle is always `dist/index.js`. It is the path required by the
   * custom widget embedder.
   */
  {
    entry: "./src/index.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "amd",
      library: "ipycolorful",
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
