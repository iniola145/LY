// SWIPER JS
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        // Keyboard Control
        keyboard: {
            enabled: true,
        },

        // Mousewheel Control
        mousewheel: {
            enabled: true,
            thresholdDelta: 60,
        },

        // Autoplay
        autoplay: {
            delay: 3000,
            // reduce the speed of the autoplay
        },

        // Speed
        speed: 700,
    });
});

// Sticky Navbar animation
const nav_bar = document.querySelector(".wrap-nav")
window.addEventListener("scroll", () => {
    this.scrollY > 150 ? nav_bar.classList.add("new") : nav_bar.classList.remove("new")
})

// JavaScript to toggle the mobile menu 
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });