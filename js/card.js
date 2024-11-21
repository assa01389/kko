window.addEventListener("load", function () {
  // api 주소 :  /apis/news.json  리퀘스트하세요.
  const CARD_DATA_URL = "/apis/cards.json";
  // 연산처리 :  html 만들기
  fetch(CARD_DATA_URL)
    .then(function (response) {
      //   console.log("뉴스 : ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //   console.log("뉴스 결과 : ", result);

      // html 만들기
      let htmlCard = "";
      for (let i = 0; i < 5; i++) {
        // 각 세부 html 글자 만들기
        const tag = `
         <a href="${result[i].link}" class="card-wrap">
                <div class="card-img">
                  <img src="/images/${result[i].imgpath}" alt="${result[i].cardname}" />
                </div>

                <div class="card-info">
                  <h5 class="card-cate">${result[i].cardname}</h5>
                  <span class="card-count">${result[i].cardno}</span>
                </div>
              </a>
          `;

        // console.log(tag);
        // 모든 html 글자 하나로 합치기
        htmlCard += tag;
      }
      //   console.log(htmlNews);
      // html 출력하기
      const cardTag = document.querySelector("#card-api");
      console.log(cardTag);
      cardTag.innerHTML = htmlCard;
    })
    .catch(function () {});
});
