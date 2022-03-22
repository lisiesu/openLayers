import React, { useContext, useState } from "react";
import DrawingInteraction from "./DrawingInteraction";
import Context from "./Context";

function AddDrawing() {
  const { map } = useContext(Context);
  const [interaction, setInteraction] = useState(false);

  function clickHandler() {
    setInteraction(!interaction);
  }

  return (
    <div>
      {interaction && (
        <DrawingInteraction map={map} interaction={interaction} />
      )}
      <div className="drawing">
        <button onClick={clickHandler}>🖍</button>
      </div>
    </div>
  );
}

export default AddDrawing;
