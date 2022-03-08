import React from "react";
import { useModelState, WidgetModelContext } from "./hooks/widget-model";

function ReactWidget(props) {
  const [name, setName] = useModelState("value");

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>{name}</p>
    </div>
  );
}

function withModelContext(Component) {
  return (props) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
