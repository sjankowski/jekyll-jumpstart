// jshint devel:true
;
(function ($, window, document, undefined) {

  $(document).ready(function () {


    $owl = $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsive: {
        // breakpoint from 0 up
        0: {
          nav: false
        },
        // breakpoint from 480 up
        600: {
          nav: true
        }
      }
    });

    $(document).keydown(function (eventObject) {
      if (eventObject.which == 37) { //left arrow
        $('.owl-carousel .owl-prev').click(); //emulates click on prev button
      } else if (eventObject.which == 39) { //right arrow
        $('.owl-carousel .owl-next').click(); //emulates click on next button
      }
    });



    $('.popup-link').magnificPopup({
      type: 'image',
      image: {
        markup: '<div class="mfp-figure">' +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
        titleSrc: 'title'
      }
    });

  });



})(window.jQuery, window, document);
