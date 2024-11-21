import React from "react";

function MbCardSlide() {
  return (
    <div className="mb-card-slide">
      <h4 className="list-title">폴더 📁</h4>
      <div className="swiper mb-card-slide-wrap">
        <div className="swiper-wrapper"></div>
      </div>
      <div className="list-card-bt-wrap">
        <button id="bt-mb-more-card" className="bt">
          전체보기
        </button>
      </div>
    </div>
  );
}

export default MbCardSlide;
