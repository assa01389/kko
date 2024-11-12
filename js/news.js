window.addEventListener("load", function () {
  // api 주소 :  /apis/news.json  리퀘스트하세요.
  const NEWS_DATA_URL = "/apis/news.json";
  // 연산처리 :  html 만들기
  fetch(NEWS_DATA_URL)
    .then(function (response) {
      //   console.log("뉴스 : ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //   console.log("뉴스 결과 : ", result);

      // html 만들기
      let htmlNews = "";
      for (let i = 0; i < 3; i++) {
        // 각 세부 html 글자 만들기
        const tag = `
        <a href="${result[i].link}" class="thum">
            <div class="thum-img">
                <img src="./images/${result[i].imgpath}" alt="${result[i].category}" />
            </div>
            <div class="thum-cate">
                <img src="./images/icon/${result[i].icon}" alt="${result[i].category}" />
                <span>${result[i].category}</span>
            </div>
            <h5 class="thum-title">${result[i].title}</h5>
            <span class="thum-date">${result[i].day}</span>
        </a>
        `;

        // console.log(tag);
        // 모든 html 글자 하나로 합치기
        htmlNews += tag;
      }
      //   console.log(htmlNews);
      // html 출력하기
      const newsTag = document.querySelector("#news-api");
      //   console.log(newsTag);
      newsTag.innerHTML = htmlNews;
    })
    .catch(function () {});
});
