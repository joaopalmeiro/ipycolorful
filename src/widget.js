import { DOMWidgetModel, DOMWidgetView } from "@jupyter-widgets/base";
import React from "react";
import ReactDOM from "react-dom";
import ReactWidget from "./ReactWidget";
import { MODULE_NAME, MODULE_VERSION } from "./version";

// Source:
// - https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Custom.html#Front-end-(TypeScript)

const defaultModelProperties = {
  value: "#ffffff",
};

export class ColorfulModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ColorfulModel.model_name,
      _model_module: ColorfulModel.model_module,
      _model_module_version: ColorfulModel.model_module_version,
      _view_name: ColorfulModel.view_name,
      _view_module: ColorfulModel.view_module,
      _view_module_version: ColorfulModel.view_module_version,
      ...defaultModelProperties,
    };
  }

  static serializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = "ColorfulModel";
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = "ColorfulView";
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class ColorfulView extends DOMWidgetView {
  render() {
    this.el.classList.add("custom-widget");

    const component = React.createElement(ReactWidget, {
      model: this.model,
    });
    ReactDOM.render(component, this.el);
  }
}
