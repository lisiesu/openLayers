import { useEffect } from "react";
import Draw from "ol/interaction/Draw";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

function DrawingInteraction({ map, interaction }) {
  
  useEffect(() => {
    const drawSource = new VectorSource();
    const drawLayer = new VectorLayer({ source: drawSource });
    let draw = new Draw({ source: drawSource, type: "Polygon" });

    map.addLayer(drawLayer);
    map.addInteraction(draw);

    return () => {
      map.removeLayer(drawLayer);
      map.removeInteraction(draw);
    };
  }, [map, interaction]);
  return null;
}

export default DrawingInteraction;
