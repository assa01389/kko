window.addEventListener("load", function () {
  const TopMenu = document.querySelector("header");
  //console.log(TopMenu);

  //메뉴 활성화
  window.addEventListener("scroll", function () {
    const scrlloPositionY = window.scrollY; //수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
    console.log(scrlloPositionY);

    if (scrlloPositionY > 0) {
      TopMenu.classList.add("active");
    } else {
      TopMenu.classList.remove("active");
    }
  });

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
  //모바일 메뉴 아이콘 변경

  //메뉴 활성화

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

  let swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 1,
  });

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
});
