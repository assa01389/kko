import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="layout">
        <div id="logo" className="header-logo">
          <a href="/" className="header-logo-link">
            <img src="./images/etc/logo-kakao.png" alt="카카오블로그" />
          </a>

          <div className="swiper header-logo-motion">
            <div className="swiper-wrapper"></div>
          </div>
        </div>

        <div className="navigation">
          <a href="#">소식</a>
          <a href="#">팀 & 크루</a>
          <a href="#">영입</a>

          <button id="search">
            <img src="./images/icon/icon-search.png" alt="" />
          </button>

          <button id="mb-menu-bt">
            <img src="./images/icon/icon-hbr.png" alt="모바일메뉴" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
