$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  adaptiveHeight: true,
  lazyLoad: 'ondemand',
});

$('.single-item').slick({
  lazyLoad: 'ondemand',
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  arrows: true,
  dots: true,
});
