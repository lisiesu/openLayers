import React, { useEffect, useRef, useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Point from "ol/geom/Point";
import { Feature, Overlay } from "ol";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import Circle from "ol/geom/Circle";
import { transform } from "ol/proj";

function PointerInteraction({ map, newCenter }) {
  const marker = new Overlay({
    element: document.getElementById("marker"),
    // position: newCenter,
    positioning: "center-center",
    stopEvent: false,
  });

  useEffect(() => {
    if (newCenter) {
      map.addOverlay(marker);
      marker.setPosition(undefined);
      marker.setPosition(newCenter);
    }

    return () => {
      if (newCenter) {
        map.removeOverlay(marker);
      }
    };
  }, [newCenter]);

  return (
    <div>
      <div id="marker" className="coordinates">
        {" "}
        📍{newCenter[0].toFixed(2)} - {newCenter[1].toFixed(2)}
      </div>
    </div>
  );
}

export default PointerInteraction;

// const initialMarker = new VectorLayer({
//   source: new VectorSource({
//     features: [new Feature({
//         geometry: new Point(newCenter)
//     })],
//   }),
//   style: new Style({
//     image: new Circle({
//       radius: 8,
//       fill: new Fill({ color: "red" }),
//     }),
//   }),
// });
