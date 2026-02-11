$(document).ready(function () {
  $(".carousel1").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  let navmenu = $(".navbar_menu_hover");
  $(".button_menu").on("click", function (e) {
    navmenu.css("display", "block");
  });
  $(".navbar_menu_hover_close").on("click", function (e) {
    e.preventDefault();
    console.log(e);
    navmenu.css("display", "none");
  });
  $(".nav_button_close").on("click", function (e) {
    e.preventDefault();
    console.log(e);
    navmenu.css("display", "none");
  });
});

// carusel second
{
  /* <i class="fa-light fa-arrow-left"></i>; */
}
var backButton = '<i class="left-button fa-light fa-arrow-left"></i>';
var nextButton = '<i class="right-button fa-light fa-arrow-right"></i>';
$(".autoplay").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: backButton,
  nextArrow: nextButton,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// carusel end
