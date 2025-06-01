import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.createElement("select");
  const options = ["Option 1", "Option 2", "Option 3"];

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    dropdown.appendChild(opt);
  });

  document.body.appendChild(dropdown);
});
