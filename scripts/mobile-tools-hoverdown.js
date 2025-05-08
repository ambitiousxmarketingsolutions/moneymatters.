const toolsToggle = document.getElementById("toolsToggle");
const toolsDropdown = document.getElementById("toolsHoverdown");

toolsToggle.addEventListener("click", function (e) {
  // Only activate toggle on screens 768px and below
  if (window.innerWidth <= 768) {
    e.preventDefault(); // prevent navigation on first click
    toolsHoverdown.classList.toggle("show-menu");
  }
});
      