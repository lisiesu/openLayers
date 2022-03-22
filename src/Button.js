import React, { useContext } from "react";
import Context from "./Context";


function Button() {

  const { map } = useContext(Context);
    
  function plusHandler() {
    map.getView().setZoom(map.getView().getZoom() + 1);
  }

  function minusHandler() {
    map.getView().setZoom(map.getView().getZoom() - 1);
  }

  return (
    <div className="custom">
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );
}

export default Button;
