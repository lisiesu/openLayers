import React, { useEffect, useContext } from "react";
import VectorLayer from "ol/layer/Vector";
import Context from "../Context";

const VectorLayer = ({ source, style, opacity, visible }) => {
  const { map } = useContext(Context);

  useEffect(() => {
    if (!map) return;

    let vectorLayer = new VectorLayer({ source, style, opacity, visible });

    /*
setOpacity
setSource
setStyle
setVisible
    */

    map.addLayer(vectorLayer);

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);

  return null;
};

export default VectorLayer;
