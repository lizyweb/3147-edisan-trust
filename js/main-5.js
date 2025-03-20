document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
     // banner Carousel Two
 function bannerCarouselTwo() {
  $('.banner-carousel.banner-carousel-2').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed: 600,
      arrows: true,
      prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
  });
}
bannerCarouselTwo();
// Latest-news-carousel
$(".latest-news-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 2000,
  center: false,
  dots: true,
  loop: true,
  margin: 25,
  nav : true,
  navText : [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
  ],
  responsiveClass: true,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
});
    
});