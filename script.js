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
  // Shuffle array function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Fetch teacher data and initialize Owl Carousel
  function initializeTeachersCarousel(teachers) {
    const carousel = $('#teachers .custom-carousel'); // Target the #teachers carousel specifically

    // Clear the carousel before adding items
    carousel.empty();

    // Shuffle the teachers' array to randomize the order
    const shuffledTeachers = shuffleArray(teachers);

    // Add each teacher as an item in the carousel
    shuffledTeachers.forEach((teacher) => {
      const imgSrc = `./teacher_images/${teacher.Url}.png`; // Path to the image
      const itemHtml = `
        <div class="item" style="background-image: url('${imgSrc}');">
          <div class="item-desc">
            <h3 class="teacher-name">
              <img src="${teacher.Flag}" alt="${teacher.Country} Flag" />
              <div class="teacher-details">
                <span class="first-name">${teacher['First Name']}</span>
                <span class="last-name">${teacher['Last Name']}</span>
              </div>
            </h3>
            <p>Master educadores</p>
          </div>
        </div>
      `;
      carousel.append(itemHtml); // Append the teacher item to the carousel
    });

    // Initialize the Owl Carousel for the #teachers section
    $('#teachers .custom-carousel').owlCarousel({
      autoWidth: true,
      autoHeight: true,
      loop: true,
      center: true,
      lazyLoad: true,
    });

    $('#image-carousel').owlCarousel({
      autoWidth: true,
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 1900,
      autoplayHoverPause: false,
      lazyLoad: true,
    });

    $('.custom-carousel .item').click(function () {
      $('.custom-carousel .item').not($(this)).removeClass('active');
      $(this).toggleClass('active');
    });
  }

  // Fetch the teachers' data from teachers.json
  fetch('teachers.json')
    .then((response) => response.json())
    .then((teachers) => {
      console.log(teachers); // Check if the data is correctly loaded
      initializeTeachersCarousel(teachers); // Initialize the carousel with the teachers' data
    })
    .catch((error) => {
      console.error('Error loading teacher data:', error);
    });
});
