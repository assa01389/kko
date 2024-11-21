import React from "react";
import VisualSlide from "./VisualSlide";
import CardSlide from "./CardSlide";

function MainSlide() {
  return (
    <div className="main-slide">
      <div className="left">
        <VisualSlide></VisualSlide>
      </div>

      <div className="right">
        <CardSlide></CardSlide>
      </div>
    </div>
  );
}

export default MainSlide;
