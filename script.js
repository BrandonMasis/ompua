document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-carousel', {
    type: 'loop', // Makes the carousel loop
    gap: '4px', // Set the gap between slides
    perPage: 3, // Number of slides visible per page on desktop

    breakpoints: {
      1024: {
        perPage: 2, // Number of slides visible per page on tablets
        gap: '8px', // Adjust the gap for tablets
      },
      768: {
        perPage: 1, // Number of slides visible per page on phones
        gap: '0px', // Adjust the gap for phones
      },
    },
  }).mount();

  const fadeElements = document.querySelectorAll('.fade-in');

  function handleScroll() {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('appear');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the function initially in case any sections are already in view
});
