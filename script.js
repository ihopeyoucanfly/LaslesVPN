// слайдер

$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// бургер

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

