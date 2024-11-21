import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MbMenu from "./MbMenu";
import Main from "./Main";

function Page() {
  return (
    <>
      {/* 반투명 배경 */}
      <div className="bg-mb-menu"></div>
      <Header></Header>
      <MbMenu></MbMenu>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Page;
