import React, { useContext } from "react";
import layers from "./AllLayers";
import LayerManager from "./LayerManager";
import Context from "./Context";

function NewLayerSwitch() {
  const { map } = useContext(Context);

  return (
    <div className="map" >
      {layers &&
        layers.length > 0 &&
        layers.map((l) => <LayerManager key={l.id} layer={l} map={map} {...l} />)}
    </div>
  );
}

export default NewLayerSwitch;
