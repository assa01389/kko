import React from "react";
import CardList from "./CardList";
import ListNewWrap from "./ListNewWrap";

function MainContent() {
  return (
    <>
    <div className="main-content">
      <div className="left">
      <ListNewWrap
      </div>
      <div className="right">
        <CardList></CardList>
      </div>
    </div>
    </>
  );
}

export default MainContent;
