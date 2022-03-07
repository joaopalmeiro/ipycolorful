// Source:
// - https://github.com/bqplot/bqplot/blob/master/js/src/extension.ts

__webpack_public_path__ =
  document.querySelector("body").getAttribute("data-base-url") +
  "nbextensions/ipycolorful";

if (window.require) {
  window.require.config({
    map: {
      "*": {
        ipycolorful: "nbextensions/ipycolorful/index",
      },
    },
  });
}

export function load_ipython_extension() {}
