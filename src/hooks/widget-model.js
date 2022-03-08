import { createContext, useContext, useEffect, useState } from "react";

// https://reactjs.org/docs/context.html#reactcreatecontext
export const WidgetModelContext = createContext(undefined);

export function useModelState(name) {
  const model = useModel();
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const [state, setState] = useState(model.get(name));

  useModelEvent(
    `change:${name}`,
    (model) => {
      setState(model.get(name));
    },
    [name]
  );

  function updateModel(val) {
    model.set(name, val);
    model.save_changes();
  }

  return [state, updateModel];
}

// https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Custom.html#Dynamic-updates
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
// https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1
// https://backbonejs.org/#Events-off
// https://youtu.be/OCTFOsCvcNs ("Using `void` to make arrow functions return nothing")
export function useModelEvent(event, callback, deps) {
  const model = useModel();
  const dependencies = [...deps, model];

  useEffect(() => {
    model.on(event, callback);

    return function cleanup() {
      model.unbind(event, callback);
    };
  }, dependencies);
}

export function useModel() {
  return useContext(WidgetModelContext);
}
