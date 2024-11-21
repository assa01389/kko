window.addEventListener("load", function () {
  const MAIN_DATA_URL = "/apis/main.json";
  fetch(MAIN_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlVisual = "";
      // 변경 : 4 라는 숫자를 result.length 즉 길이(5)로 바꿨다.
      for (let i = 0; i < result.length; i++) {
        // 각 세부 html 글자 만들기
        // 변경 : 지금의 내용은 문법이 아닙니다.
        // 변경 : 지금 변경되는 내용은 프로그래머가 생각을 표현하고 문제 해결시도
        const tag = `
        <div class="swiper-slide" data-pc="${result[i].pc}" data-mb="${result[i].mb}">
            <a href="${result[i].url}">
              <img src="/images/${result[i].pic}" alt="${result[i].title}" />
              <!-- 추가 부분 -->
              <div class="title">${result[i].title}</div>
            </a>
          </div>
        `;

        // console.log(tag);
        // 모든 html 글자 하나로 합치기
        htmlVisual += tag;
      }
      //   console.log(htmlNews);
      // html 출력하기
      const visualTag = document.querySelector(".visual-slide .swiper-wrapper");
      // console.log(cardTag);

      visualTag.innerHTML = htmlVisual;

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide",
      );
      // console.log("innerHtml 이후 ", slideList);

      // 키핑
      slideList.forEach(function (aaa) {
        // console.log(aaa);
      });

      // 추가  : 현재 PC 화면인지 아니지를 먼저 구분합니다.
      // 추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
      // 추가 : 우리는 document.querySelect 로
      // .visual-slide .swiper-wrapper .swiper-slide 를 찾을 수 있을까요?

      let windowState = "PC";
      // 윈도우 너비 파악
      const windowWidth = window.innerWidth;
      // 조건에 따라서 버전 확인
      if (windowWidth > 1024) {
        if (windowState != "PC") {
          windowState = "PC";
          // console.log("PC 버전");
        }
      } else {
        if (windowState != "MB") {
          windowState = "MB";
          // console.log("MB 버전");
        }
      }
      // console.log(windowState);

      window.addEventListener("resize", function () {
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        // 조건에 따라서 버전 확인
        if (windowWidth > 1024) {
          if (windowState != "PC") {
            windowState = "PC";
            // console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            // console.log("MB 버전");
          }
        }
      });

      const visualSlideSW = new Swiper(".visual-slide", {
        loop: true,
        pagination: {
          el: ".visual-slide .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
      });
      // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
      const visaulSide = document.querySelector(".visual-slide");
      // console.log(visaulSide);

      visaulSide.addEventListener("mouseenter", function () {
        // console.log("오버");
        visualSlideSW.autoplay.stop();
      });

      visaulSide.addEventListener("mouseleave", function () {
        // console.log("아웃");
        visualSlideSW.autoplay.start();
      });
    })
    .catch(function () {});
});
