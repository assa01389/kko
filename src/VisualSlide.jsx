import React from "react";

function VisualSlide() {
  return (
    <div className="swiper visual-slide">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <a href="#">
            <img src="./images/b1.png" alt="배너이미지" />
          </a>
        </div>
        <div className="swiper-slide">
          <a href="#">
            <img src="./images/b1.png" alt="배너이미지" />
          </a>
        </div>
        <div className="swiper-slide">
          <a href="#">
            <img src="./images/b1.png" alt="배너이미지" />
          </a>
        </div>
        <div className="swiper-slide">
          <a href="#">
            <img src="./images/b1.png" alt="배너이미지" />
          </a>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default VisualSlide;
