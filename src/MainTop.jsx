import React from "react";
import MainSlide from "./MainSlide";
import MainContent from "./MainContent";

function MainTop() {
  return (
    <div className="layout">
      {/* 슬라이드 */}
      <MainSlide></MainSlide>
      {/* 메인내용 */}
      <MainContent></MainContent>
    </div>
  );
}

export default MainTop;
