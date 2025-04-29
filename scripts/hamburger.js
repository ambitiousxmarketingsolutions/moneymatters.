document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const nav = document.querySelector(".top");

    // Force nav to be hidden on load
    nav.classList.remove("show");
    nav.style.display = "none";

    menuToggle.addEventListener("click", function () {
        const isVisible = nav.classList.toggle("show");

        // Toggle display manually
        if (isVisible) {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    });
});





