$(".slick-example").slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000
});

$(".slick-section-popular").slick({
  slidesToShow: 3,
  //lazyload: "ondemand",
  // centerMode: true,
  centerPadding: "10px",
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$(".slick-section-hot").slick({
  slidesToShow: 3,
  // lazyload: "ondemand",
  // centerMode: true,
  centerPadding: "10px",
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
