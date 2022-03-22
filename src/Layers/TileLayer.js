import React, { useContext, useEffect } from "react";
import TileLayer from "ol/layer/Tile";
import Context from "../Context";

const TileLayer = ({ source, opacity, visible }) => {
  const { map } = useContext(Context);

  useEffect(() => {
    if (!map) return;

    let tileLayer = new TileLayer({ source, opacity, visible });

    map.addLayer(tileLayer);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  return null;
};

export default TileLayer;
