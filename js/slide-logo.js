window.addEventListener("load", function () {
  // api 주소 :  json 주소가 어디니?
  const LOGO_DATA_URL = "/apis/logodata.json";
  // API 를 통한 데이터 불러오기
  // ---- request: 리퀘스트
  // API 를 통해 불러들여진 결과물
  // ---- response : 리스판스

  fetch(LOGO_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      // console.log(result);
      // 2. 반복해서 html 태그 를 생성
      let logoHtml = "";

      for (let i = 0; i < result.length; i++) {
        const data = `<div class="swiper-slide"><img src="/images/etc/${result[i].imgUrl}" alt="${result[i].desc}"/></div>`;

        logoHtml += data;
      }

      // console.log(logoHtml);

      // 3. 생성된 html 을 원하는 곳에 배치
      const headerLogoTag = document.querySelector(".header-logo-motion .swiper-wrapper");
      // console.log(headerLogoTag);
      headerLogoTag.innerHTML = logoHtml;

      // 4. swiper 생성 및 실행
      const headerLogo = new Swiper(".header-logo-motion", {
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

      // 추가 1:  먼저 멈춘다.
      headerLogo.autoplay.stop();
      // 추가 2: 마우스 오버 되면 다시 플레이
      headerLogoTag.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      // 추가 3: 마우스 아웃 되면 멈춤 및 첫 슬라이드로 이동
      headerLogoTag.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        headerLogo.slideToLoop(0); // 무조건 첫 슬라이드로 가라.
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  //   const logoData;
});
