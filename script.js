document.addEventListener('DOMContentLoaded', function () {
  // Scroll animation for fade-in elements
  function handleScroll() {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add('appear');
      }
    });
  }

  const fadeElements = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the function initially in case any sections are already in view
});

$(document).ready(function () {
  // Owl Carousel for custom carousel
  $('.custom-carousel').owlCarousel({
    autoWidth: true,
    autoHeight: true,
    loop: true,
    center: true,
    lazyLoad: true,
  });

  // Click functionality for custom carousel items
  $('.custom-carousel .item').click(function () {
    $('.custom-carousel .item').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });

  // Owl Carousel for image carousel
  $('#image-carousel').owlCarousel({
    autoWidth: true,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 1900,
    autoplayHoverPause: false,
    lazyLoad: true,
  });
});
