window.addEventListener("load", function () {
  // api 주소 :  /apis/crew.json  리퀘스트하세요.
  const CREW_DATA_URL = "/apis/crew.json";
  // 데이터 호출
  fetch(CREW_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //   console.log("데이터 결과 : ", result);

      // 최종 html 만들기
      let htmlCrew = "";

      // a 태그만 만들어서 배치하기
      let html_Atag_list = "";

      for (let i = 0; i < result.length; i++) {
        // 현재 실행되는 순서 0, 1, 2, 3
        // console.log("i", i);
        const obj = result[i];

        html_Atag_list += `
        <a href="${obj.link}" class="thum">
            <div class="thum-img">
                <img src="/images/${obj.imgpath}" alt="${obj.category}" />
            </div>
            <div class="thum-cate">
                <img src="/images/icon/${obj.icon}" alt="${obj.category}" />
                <span>${obj.category}</span>
            </div>
            <h5 class="thum-title">${obj.title}</h5>
            <span class="thum-date">${obj.day}</span>
        </a>
        `;
        // console.log(html_Atag_list);

        let tag = "";

        // 3개씩 배치하는 Div 형태
        //  i 가 0일때  예외처리 위한 코드
        if ((i + 1) % 3 == 0) {
          //   console.log("list div 만들어");
          tag = `<div class="list">${html_Atag_list}</div>`;
          //  3개를 다 채웠다. 그렇다면 다시 만들자
          //  a 태그 목록만 다시 만들기 위해 비우자
          html_Atag_list = "";
        } else if (i == result.length - 1) {
          tag = `<div class="list">${html_Atag_list}</div>`;
          html_Atag_list = "";
        }

        htmlCrew += tag;
      }

      //   console.log(htmlCrew);
      // html 출력하기
      const crewTag = document.querySelector("#crew-api");
      console.log(crewTag);
      crewTag.innerHTML = htmlCrew;
    })
    .catch(function () {});
});
