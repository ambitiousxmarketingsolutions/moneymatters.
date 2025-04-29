
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const nav = document.querySelector(".top");

    menuToggle.addEventListener("click", function () {
        // Toggle inline display style
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    });
});



