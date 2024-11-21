import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="layout">
          <div className="left">
            <div className="footer-logo">
              <a href="#">
                <img
                  src="./images/etc/logo-kakao-footer.png"
                  alt="카카오 블로그"
                />
              </a>
            </div>

            <div className="footer-txt">
              카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다. <br />
              AI 없이는 상상할 수 없는 세상을 만들기 위해선 생각하지 못한 많은
              물음이 필요합니다. <br />
              세상을 변화시킬 수 있는 새로운 물음을 던질 크루를 기다립니다.
            </div>

            <div className="footer-link">
              <a
                href="https://careers.kakaobrain.com"
                target="_blank"
                rel="noreferrer"
              >
                지원하러가기
              </a>
            </div>
          </div>

          <div className="right">
            <ul className="site-map-list">
              <li>
                <b>정보</b>
              </li>
              <li>
                <a href="#">
                  영입페이지 <i className="xi-arrow-up rot-icon"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#">이메일무단수집거부</a>
              </li>
              <li>
                <a href="#">개인정보처리참</a>
              </li>
              <li>
                <a href="#">오시는 길</a>
              </li>
            </ul>
            <ul className="site-map-list">
              <li>
                <b>문의</b>
              </li>
              <li>
                <a href="#">영입</a>
              </li>
              <li>
                <a href="#">PR</a>
              </li>
              <li>
                <a href="#">마케팅∙사업제휴</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <div className="layout">
          <div className="left">
            <span className="copy">
              Kakao Brain Corp. @ All rights reserved.
            </span>
          </div>
          <div className="right">
            <ul className="sns">
              <li>
                <a href="#" className="insta">
                  <i className="xi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="xi-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="#" className="github">
                  <i className="xi-github"></i>
                </a>
              </li>
              <li>
                <a href="#" className="facebook">
                  <i className="xi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
