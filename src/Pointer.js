import { fromLonLat, transform } from "ol/proj";
import React, { useContext, useState } from "react";
import PointerInteraction from "./PointerInteraction";
import Context from "./Context";

function Pointer() {
  const { map } = useContext(Context);

  const coordinate = (centre) => {
    if (centre != null) {
      return transform(centre, "EPSG:4326", "EPSG:3857");
    }
  };

  const [centre] = useState([0, 0]);
  const [newCenter, setNewCentre] = useState(coordinate(centre));
  const [showMarker, setShowMarker] = useState(false);
  //   const [newCenter, setNewCentre] = useState(fromLonLat(centre));

  function centerMarker(event) {
    console.log(event.coordinate);
    setNewCentre(event.coordinate);
  }

  function clickHandler() {
    setShowMarker(!showMarker);
    if (showMarker === false) {
      map.on("click", centerMarker);
    }
    setNewCentre([0, 0]);
  }

  return (
    <div>
      <div className="pointer">
        <button onClick={clickHandler}>📍</button>
      </div>
      {showMarker && <PointerInteraction map={map} newCenter={newCenter} />}
    </div>
  );
}

export default Pointer;
