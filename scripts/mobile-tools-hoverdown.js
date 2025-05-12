
  const toolsToggle = document.getElementById("toolsToggle");
  const toolsDropdown = document.getElementById("toolsHoverdown");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  let toolsClickedOnce = false;

  toolsToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!toolsClickedOnce) {
        e.preventDefault(); // Prevent navigation on first click
        toolsDropdown.classList.add("show-menu");
        toolsClickedOnce = true;
  
        setTimeout(() => {
          toolsClickedOnce = false;
        }, 3000);
      } else {
        e.preventDefault(); // Just in case
        toolsDropdown.classList.remove("show-menu");
        toolsClickedOnce = false;
  
        // Manually go to the link
        window.location.href = toolsToggle.href;
      }
    }
  });
  