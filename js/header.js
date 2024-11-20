// jQuery 의 목적은 2가지
// html 및 css 제어
// 외부데이터 연동

// html 과 css 가 화면에 보일 준비 끝나면
// image, font, mp3, mp4 는 로딩 체크를 못함.
// window.addEventListener("DOMContentLoaded", function(){})
$(document).ready(function () {
  // header 를 보관함에 담아둔다.
  var header = $(".header");

  // 스크롤 체크하기
  $(window).on("scroll", function () {
    var scrollPositionY = $(window).scrollTop();
    if (scrollPositionY > 0) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });
});

$(document).ready(function () {
  var mobileButton = $("#mb-menu-bt");
  var mobileButtonImage = $("#mb-menu-bt img");
  var openIcon = "./images/icon/icon-hbr.png";
  var closeIcon = "./images/icon/icon-close.png";
  var mobileMenuBg = $(".bg-mb-menu");
  var mobileMenu = $(".mb-menu");

  mobileButton.on("click", function () {
    var imageSrc = mobileButtonImage.attr("src");
    if (imageSrc == openIcon) {
      mobileButtonImage.attr("src", closeIcon);
      mobileMenuBg.addClass("bg-mb-menu-active");
      mobileMenu.addClass("mb-menu-active");
    } else {
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });

  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
});
