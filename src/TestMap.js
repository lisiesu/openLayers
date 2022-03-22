import React, { useState, useRef, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import Button from "./Button";
import AddDrawing from "./AddDrawing";
import Pointer from "./Pointer";
import Context from "./Context";
import NewLayerSwitch from "./NewLayerSwitch";
import OSMSource from "ol/source/OSM";

function TestMap() {
  const [map, setMap] = useState();

  const mapRef = useRef();
  mapRef.current = map;

  function getMap() {
    //wrapX:false
    const initialMap = new Map({
      view: new View({ center: [-6655.5402445057125, 6709968.258934638], zoom: 5 }),
      layers: [standard],
      target: mapRef.current,
      controls: [],
    });
    setMap(initialMap);
  }

  useEffect(() => {
    getMap();
  }, []);

  const standard = new TileLayer({
    source: new OSMSource(),
    visible: true,
    opacity: 1,
  });

  return (
    <Context.Provider value={{ map }}>
      <div ref={mapRef} className="map" />
      <div>
        <Button />
        <AddDrawing />
        <Pointer />
        <NewLayerSwitch />
      </div>
    </Context.Provider>
  );
}

export default TestMap;
