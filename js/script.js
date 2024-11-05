$(document).ready(function () {
  let $topMenu = $("header");
  let menuOffset = $topMenu.offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > menuOffset) {
      $topMenu.addClass("active");
    } else {
      $topMenu.removeClass("active");
    }
  });

  $("#card_slide").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
});
