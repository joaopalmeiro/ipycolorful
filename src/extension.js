// Source:
// - https://github.com/bqplot/bqplot/blob/master/js/src/extension.ts
// - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
// - https://github.com/jupyter-widgets/widget-ts-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/src/extension.ts
// - https://github.com/jupyter-widgets/widget-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/js/lib/extension.js

window.__webpack_public_path__ =
  document.querySelector("body").getAttribute("data-base-url") +
  "nbextensions/ipycolorful";

export * from "./index";
