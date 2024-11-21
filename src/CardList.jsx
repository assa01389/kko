import React from "react";

function CardList() {
  return (
    <>
      <h4 className="list-title">폴더 📁</h4>
      <div className="list-card" id="card-api"></div>
      <div className="list-card-bt-wrap">
        <button id="bt-more-card" className="bt">
          전체보기
        </button>
      </div>
    </>
  );
}

export default CardList;
