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

let currentIndex = 0;
// Function to set the current index

function setCurrentIndex(index) {
  currentIndex = index;
  return currentIndex;
}

function getCurrentIndex() {
  return currentIndex;
}

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function updateCarousel() {
    const offset = -400 * currentIndex;
    console.log(offset);
    track.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(currentIndex);
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Total Slides: ${slides.length}`);
    updateCarousel();
    updateIndicators();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(currentIndex);
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Total Slides: ${slides.length}`);
    updateCarousel();
    updateIndicators();
  });

  // Initialize the carousel position
  const myCarousel = document.querySelector(".mycarousel");

  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.classList.add("carousel-indicators");
  myCarousel.appendChild(indicatorsContainer);

  slides.forEach((slide, index) => {
    const indicator = document.createElement("button");
    indicator.classList.add("carousel-indicator");
    indicator.dataset.index = index;
    indicatorsContainer.appendChild(indicator);
    
    indicator.addEventListener("click", () => {
      setCurrentIndex(indicator.dataset.index);
      console.log(`Current Index: ${getCurrentIndex()}`);
      updateCarousel();
      updateIndicators();
    });

 
  });

  function updateIndicators() {
    const indicators = indicatorsContainer.children;
    Array.from(indicators).forEach((indicator) => {
      if (indicator.dataset.index == getCurrentIndex()) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }
  updateIndicators();

});