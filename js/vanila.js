window.addEventListener("load", function () {
  //header

  //TopMenu
  const TopMenu = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrlloPositionY = window.scrollY; //수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
    //console.log(scrlloPositionY);

    if (scrlloPositionY > 0) {
      TopMenu.classList.add("active");
    } else {
      TopMenu.classList.remove("active");
    }
  });
  //TopMenu
  //로고 슬라이드
  const LOGO_DATA_URL = "/apis/logodata.json";

  fetch(LOGO_DATA_URL)
    .then(function (response) {
      //console.log(response);
      const result = response.json();
      //console.log(result);
      return result;
    })
    .then(function (result) {
      // console.log("불러온데이터 ", result);

      let logoHtml = "";

      for (let i = 0; i < 8; i++) {
        const data = `<li class="swiper-slide"><img src="images/${result[i].imgUrl}" alt="${result[i].desc}"/></li>`;
        logoHtml += data;
      }
      // console.log(logoHtml);

      const logoIcon = document.querySelector(".logo_slide .swiper-wrapper");
      //html에 글자를 넣는
      logoIcon.innerHTML = logoHtml;

      const logoslide = new Swiper(".logo_slide", {
        loop: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      });
      logoslide.autoplay.stop();

      const swiperAuto = document.querySelector(".logo_slide .swiper-wrapper");

      // 마우스 오버 시 자동 재생 시작
      swiperAuto.addEventListener("mouseenter", () => {
        logoslide.autoplay.start();
      });

      // 마우스가 떠날 시 자동 재생 멈춤
      swiperAuto.addEventListener("mouseleave", () => {
        logoslide.autoplay.stop();
        logoslide.slideTo(0);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  //로고 슬라이드
  //header

  //main
  // 메인 스와이퍼

  const slideData = "/apis/slide.json";

  fetch(slideData)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let slideHtml = "";

      for (let i = 0; i < result.length; i++) {
        const slide = `
          <li class="swiper-slide data_desktop="${result[i].desktop}" data_mobile="${result[i].mobile}">
            <a href="${result[i].url}">
              <img src="images/${result[i].pic}" alt="${result[i].pic}" />
              <strong>${result[i].title}</strong>
            </a>
          </li>
        `;
        slideHtml += slide;
      }

      const slideImg = document.querySelector(".main_visu .swiper-wrapper");
      slideImg.innerHTML = slideHtml;

      const slideList = document.querySelectorAll(
        ".main_visu .swiper-wrapper .swiper-slide"
      );

      slideList.forEach(function (result) {
        // console.log(result);
      }); //추가예정

      let windowFull = "desktop";
      // console.log(windowFull);

      const windowWidth = window.innerWidth;

      if (windowWidth > 1024) {
        if (windowFull != "desktop") {
          windowFull = "desktop";
          // console.log("pc");
        }
      } else {
        if (windowFull != "mobile") {
          windowFull = "mobile";
          // console.log("mobile");
        }
      }

      window.addEventListener("resize", function () {
        const windowWidth = window.innerWidth;

        if (windowWidth > 1024) {
          if (windowFull != "desktop") {
            windowFull = "desktop";
            console.log("pc");
          }
        } else {
          if (windowFull != "mobile") {
            windowFull = "mobile";
            console.log("mobile");
          }
        }
      });

      let swiper = new Swiper(".main_visu", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".main_visu .swiper-pagination",
          clickable: true,
        },
        loop: true,
        loopedSlides: 1,
      });

      let visaulSlide = document.querySelector(".main_visu");
      // console.log(visaulSide);

      visaulSlide.addEventListener("mouseenter", function () {
        //console.log("오버");
        swiper.autoplay.stop();
      });

      visaulSlide.addEventListener("mouseleave", function () {
        //console.log("아웃");
        swiper.autoplay.start();
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // 메인 스와이퍼

  //box_list
  const newData = "apis/news.json";

  fetch(newData)
    .then(function (response) {
      // console.log("뉴스:", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      console.log("뉴스결과 : ", result);
      let newsItem = "";
      for (let i = 0; i < 3; i++) {
        const tag = `
        <li>
          <a href="${result[i].link}">
            <p><img src="images/${result[i].imgpath}" alt="${result[i].category}" /></p>
            <div class="tit">
              <b><img src="images/${result[i].icon}" alt="${result[i].category}"/></b>
              <b>${result[i].category}</b>
            </div>
            <div class="desc">
              <p>${result[i].title}</p>
              <span>${result[i].day}</span>
            </div>
          </a>
        </li>
        `;

        newsItem += tag;
      }

      const newsHtmlTag = document.querySelector(".new ul");
      newsHtmlTag.innerHTML = newsItem;
    })
    .catch(function () {});
  //box_list

  //pick_list
  const pickDataUrl = "apis/pick.json";

  fetch(pickDataUrl)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlPick = "";
      let htmlTagList = "";

      for (let i = 0; i < result.length; i++) {
        const matter = result[i];
        htmlTagList += `
          <li>
            <a href="${matter.link}">
              <p><img src="images/${matter.imgpath}" alt="${matter.category}" /></p>
              <div class="tit">
                <b><img src="images/${matter.icon}" alt="${matter.category}" /></b>
                <b>${matter.category}</b>
              </div>
              <div class="desc">
                <p>${matter.title}</p>
                <span>${matter.day}</span>
              </div>
            </a>
          </li>
        `;

        let Tag = "";

        if ((i + 1) % 3 == 0) {
          Tag = `<div class="pick"><ul>${htmlTagList}</ul></div>`;

          htmlTagList = "";
        } else if (i == result.length - 1) {
          Tag = `<div class="pick"><ul>${htmlTagList}</ul></div>`;
          htmlTagList = "";
        }

        htmlPick += Tag;
      }

      const pickHtmlTag = document.querySelector(".pick ul");
      pickHtmlTag.innerHTML = htmlPick;
    })
    .catch(function () {});
  //pick_list

  //card_list
  const cardData = "apis/cards.json";

  fetch(cardData)
    .then(function (response) {
      // console.log("카드:", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let cardItem = "";
      for (let i = 0; i < 5; i++) {
        const list = `
        <li class="swiper-slide">
          <a href="${result[i].link}">
            <img src="images/${result[i].imgpath}" alt="${result[i].cardname}" />
            <div class="txt">
              <b>${result[i].cardname}</b>
              <span>${result[i].cardno}</span>
            </div>
          </a>
        </li>
        `;

        cardItem += list;
      }

      const cardsHtmlTag = document.querySelector("#card_slide");
      cardsHtmlTag.innerHTML = cardItem;

      let cardSwiper; // Swiper 인스턴스를 저장할 변수

      function initSwiper() {
        if ($(window).width() < 1024) {
          if (!cardSwiper) {
            // 초기화된 Swiper가 없을 때만 생성
            cardSwiper = new Swiper(".swiper-container", {
              slidesPerView: 3,
              loop: true,
              loopAdditionalSlides: 1,
              freeMode: true,
              spaceBetween: 20,
            });
          }
        } else {
          if (cardSwiper) {
            // PC에서 기존에 초기화된 Swiper가 있으면 해제
            cardSwiper.destroy(); // Swiper 해제
            cardSwiper = undefined;
            $(".swiper-wrapper").removeAttr("style"); // Swiper가 생성한 인라인 스타일 제거
            $(".swiper-slide").removeAttr("style");
          }
        }
      }
      $(document).ready(function () {
        initSwiper(); // 페이지 로드 시 초기화
      });

      $(window).on("resize", function () {
        initSwiper(); // 화면 크기 변경 시 초기화/해제
      });
      //모바일 카드 스와이퍼
    })
    .catch(function (result) {});
  //card_list

  //main

  //모바일 메뉴 아이콘 변경

  let menuIcon = document.querySelector(".hbr");
  let icon = document.querySelector(".xi-bars");
  let menuBg = document.querySelector(".menu_bg");
  let nav = document.querySelector(".nav");

  menuIcon.onclick = function () {
    if (icon.classList.contains("xi-bars")) {
      icon.classList.replace("xi-bars", "xi-close");
      menuBg.classList.add("active");
      nav.classList.add("active");
    } else {
      icon.classList.replace("xi-close", "xi-bars");
      menuBg.classList.remove("active");
      nav.classList.remove("active");
    }
  };
  // 반응형
  window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);
    if (windowWidth > 1024) {
      icon.classList.replace("xi-close", "xi-bars");
      menuBg.classList.remove("active");
      nav.classList.remove("active");
    } else {
    }
  });
  // 반응형
  //모바일 메뉴 아이콘 변경

  //모바일 카드 스와이퍼
});
