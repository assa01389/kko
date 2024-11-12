$(document).ready(function () {
  let $topMenu = $("header");
  let menuOffset = $topMenu.offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > menuOffset) {
      $topMenu.addClass("active");
    } else {
      $topMenu.removeClass("active");
    }
  });

  // $(".hbr, .close").on("click", function () {
  //   $(".nav").stop().slideToggle(400);
  //   $(".menu_bg").fadeIn();
  //   $(".close").show();
  //   $(".hbr").hide();
  // });
  // $(".close").on("click", function () {
  //   $(".menu_bg").fadeOut();
  //   $(".hbr").show();
  //   $(".close").hide();
  // });

  $(".hbr, .close").on("click", function () {
    const nav = $(this).hasClass("hbr"); // 현재 클릭된 버튼이 햄버거 버튼인지 확인

    $(".nav").stop().slideToggle(400); // 메뉴 토글
    $(".menu_bg").fadeToggle(); // 배경 토글

    $(".close").toggle(nav); // 햄버거 버튼 클릭 시 닫기 버튼 보이기
    $(".hbr").toggle(!nav); // 닫기 버튼 클릭 시 햄버거 버튼 보이기
  });
});

let swiper; // Swiper 인스턴스를 저장할 변수

function initSwiper() {
  if ($(window).width() < 1024) {
    if (!swiper) {
      // 초기화된 Swiper가 없을 때만 생성
      swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        loop: true,
        loopAdditionalSlides: 1,
        freeMode: true,
      });
    }
  } else {
    if (swiper) {
      // PC에서 기존에 초기화된 Swiper가 있으면 해제
      swiper.destroy(); // Swiper 해제
      swiper = undefined;
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
        delay: 1500,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  })
  .catch(function (error) {
    console.log(error);
  });
