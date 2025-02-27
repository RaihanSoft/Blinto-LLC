//! Navbar Mobile Menu Functionality (Hamburger Button)
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".mobile-menu");

    // Hamburger Button Click Functionality
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Auto Hide Mobile Menu when Screen Resizes Above 900px
    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            navMenu.classList.remove("active");
        }
    });
});




