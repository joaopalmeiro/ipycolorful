import { IJupyterWidgetRegistry } from "@jupyter-widgets/base";

import { MODULE_NAME, MODULE_VERSION } from "./version";
import * as widgetExports from "./widget";

const EXTENSION_ID = "ipycolorful:plugin";

function activateWidgetExtension(app, registry) {
  registry.registerWidget({
    name: MODULE_NAME,
    version: MODULE_VERSION,
    exports: widgetExports,
  });
}

const plugin = {
  id: EXTENSION_ID,
  requires: [IJupyterWidgetRegistry],
  activate: activateWidgetExtension,
  autoStart: true,
};

export default plugin;
