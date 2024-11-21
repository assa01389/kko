import React from "react";

function ListCateWrap() {
  return (
    <div className="list-cate-wrap">
      <h4 className="list-title">NEW. 따끈따끈 새로 나온 글 🔥</h4>
      <div className="list-thum-wrap" id="crew-api"></div>
      <div className="list-bt-wrap">
        <button id="bt-more" className="bt">
          더보기
        </button>
      </div>
    </div>
  );
}

export default ListCateWrap;
