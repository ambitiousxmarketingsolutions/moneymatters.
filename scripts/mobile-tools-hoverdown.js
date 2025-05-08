
  const toolsToggle = document.getElementById("toolsToggle");
  const toolsDropdown = document.getElementById("toolsHoverdown");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  let toolsClickedOnce = false;

  // Handle click on "Tools"
  toolsToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!toolsClickedOnce) {
        e.preventDefault(); // Stop the link on first click
        toolsDropdown.classList.add("show-menu");
        toolsClickedOnce = true;

        // Reset if second click doesn't happen in 3 seconds
        setTimeout(() => {
          toolsClickedOnce = false;
        }, 3000);
      } else {
        // Second click - allow navigation
        toolsHoverdown.classList.remove("show-menu");
        toolsClickedOnce = false;
        // Let default link behavior happen
      }
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      !toolsHoverdown.contains(e.target) &&
      e.target !== toolsToggle
    ) {
      toolsHoverdown.classList.remove("show-menu");
      toolsClickedOnce = false;
    }
  });

  // Reset when hamburger is clicked (menu toggle)
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("show"); // Toggle the menu
    toolsHoverdown.classList.remove("show-menu"); // Reset dropdown
    toolsClickedOnce = false;
  });

  
      