import "./styles.css";

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