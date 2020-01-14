$(".slick-example").slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000
});

$(".slick-section").slick({
  slidesToShow: 3,
  lazyload: "ondemand",
  centerMode: true,
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
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
