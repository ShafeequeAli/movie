import React from "react";
import wave from "../wave.gif";

function spinner() {
  return (
    <div className="m-5">
      <img
        src={wave}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading...."
      ></img>
      <h3>Loading....</h3>
    </div>
  );
}

export default spinner;
