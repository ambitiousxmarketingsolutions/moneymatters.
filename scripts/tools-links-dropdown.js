
  const toolsToggle = document.getElementById("toolsToggle");
  const toolsDropdown = document.getElementById("toolsHoverdown");

  let clickedOnce = false;

  toolsToggle.addEventListener("click", (e) => {
    if (!clickedOnce) {
      e.preventDefault(); // Stop navigation
      toolsHoverdown.classList.add("show-menu");
      clickedOnce = true;

      // Reset after a few seconds or when clicking elsewhere
      setTimeout(() => clickedOnce = false, 3000);
    } else {
      // Let the link work on second click
      clickedOnce = false;
    }
  });

  // Optional: hide dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!toolsHoverdown.contains(e.target)) {
      toolsHoverdown.classList.remove("show-menu");
      clickedOnce = false;
    }
  });
