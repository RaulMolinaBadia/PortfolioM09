$(document).ready(function ($) {
  $('.gallery').owlCarousel({
    loop: true,
    dots: false,
    video: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.gallery-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  $.page_zoom();
})
