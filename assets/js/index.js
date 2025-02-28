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

// testimonial  
document.querySelector('.load-more-btn').addEventListener('click', function () {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => {
        card.style.display = 'flex';
    });
    this.style.display = 'none';
});



// Who is it for?
function showTab(tab) {
    const tabs = document.querySelectorAll('.audience_tab');
    const images = [
        "https://i.ibb.co.com/ym6gwJRy/Frame-1.png",
        "https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ecbeab55128d95cc67_audience-1.webp",
        "https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26eca8fcecc7a0052a1c_audience-3.webp"
    ];


    tabs.forEach((t, index) => {
        t.classList.remove('active');
        if (index === tab - 1) {
            t.classList.add('active');
        }
    });

    const img = document.getElementById("tabImage");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = images[tab - 1];
        img.style.opacity = 1;
    }, 300);
}


document.querySelectorAll('.faq-title').forEach((faq) => {
    faq.onclick = () => {
        faq.parentElement.classList.toggle('active');
    };
});

// in footer
document.querySelector(".scroll-btn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
document.querySelector('.logo').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});