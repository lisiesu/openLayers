import React, { useEffect, useState, useRef } from "react";

function LayerManager({ layer, map }) {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(null);

  const opacityRef = useRef();

  function toggleLayer() {
    setVisible(!visible);
  }

  function changeOpacity(newOpacity = 1) {
    newOpacity = parseFloat(opacityRef.current.value);
    setOpacity(newOpacity);
  }

  //Add layers
  useEffect(() => {
    if (map && layer && layer.title) {
      map.addLayer(layer.title);
      layer.title.setVisible(visible);
    }
    return () => {
      if (map && layer && layer.title) {
        map.removeLayer(layer.title);
      }
    };
  }, [map]);

  //set opacity
  useEffect(() => {
    if (map && layer) {
      layer.title.setOpacity(opacity);
    }
  }, [opacity]);

  //set visibility
  useEffect(() => {
    if (map && layer) {
      layer.title.setVisible(visible);
    }
  }, [visible]);

  return (
    <div>
      <div>
        <label>{layer.id}</label>
        <input type="checkbox" checked={visible} onChange={toggleLayer} />
        <label>
          {" "}
          Opacity{" "}
          <input
            ref={opacityRef}
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={changeOpacity}
          />
          <span>{opacity}</span>
        </label>
      </div>
    </div>
  );
}

export default LayerManager;
