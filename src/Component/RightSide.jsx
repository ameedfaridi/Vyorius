import React from "react";
import image from "../img.png";

const RightSide = () => {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      className="right-div"
    >
      <img src={image} className="map" />
    </div>
  );
};

export default RightSide;
