import React from "react";
import ListNewWrap from "./ListNewWrap";
import Banner from "./Banner";
import ListCateWrap from "./ListCateWrap";
import CardList from "./CardList";

function MainContent() {
  return (
    <div className="main-content">
      <div className="left">
        {/* 뉴스 */}
        <ListNewWrap></ListNewWrap>
        {/* 배너 */}
        <Banner></Banner>
        {/* 크루 */}
        <ListCateWrap></ListCateWrap>
      </div>
      <div className="right">
        {/* 카드들 */}
        <CardList></CardList>
      </div>
    </div>
  );
}

export default MainContent;
