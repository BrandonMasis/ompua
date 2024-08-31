document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-carousel', {
    type: 'loop', // Makes the carousel loop
    gap: '10px', // Set the gap between slides
    perPage: 3, // Number of slides visible per page on desktop

    breakpoints: {
      1024: {
        perPage: 2, // Number of slides visible per page on tablets
        gap: '8px', // Adjust the gap for tablets
      },
      768: {
        perPage: 1, // Number of slides visible per page on phones
        gap: '5px', // Adjust the gap for phones
      },
    },
  }).mount();
});
