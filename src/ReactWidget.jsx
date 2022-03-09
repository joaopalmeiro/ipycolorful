import React from "react";
import { useModelState, WidgetModelContext } from "./hooks/widget-model";
import { HexColorPicker } from "react-colorful";

function ReactWidget(props) {
  const [color, setColor] = useModelState("value");

  return <HexColorPicker color={color} onChange={setColor} />;
}

function withModelContext(Component) {
  return (props) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
