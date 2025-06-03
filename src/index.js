import "./styles.css";
import "./styles_carousel.css";

function dropdown(button) {
  const elements = button.nextElementSibling;
  if (!elements) {
      console.error('No dropdown elements found.');
      return;
  }
  button.addEventListener('click', () => {
      Array.from(elements.children).forEach(element => {
          if (element.classList.contains('show')) {
              hideDropdown(element);
          } else {
              showDropdown(element);
          }
      });
  });
}

function showDropdown(elements) {
  elements.classList.add('show');
  elements.style.display = 'block';
}
function hideDropdown(elements) {
  elements.classList.remove('show');
  elements.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  const dropbtns = document.querySelectorAll('.dropbtn');
      dropbtns.forEach(dropbtn => {
          dropdown(dropbtn);
      }
  );
}
);

// Initialize the carousel

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -400 * currentIndex;
    console.log(offset);
    track.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Total Slides: ${slides.length}`);
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Total Slides: ${slides.length}`);
    updateCarousel();
  });
});
