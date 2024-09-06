

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

