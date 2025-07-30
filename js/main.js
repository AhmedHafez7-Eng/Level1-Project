// By: Ahmed Hafez

/* ============================================= */
const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1 // Small screens
        },
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        }
    }
});

/* ============================================= */
// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    //once: true, // Whether animation should happen only once
    mirror: false // Whether elements should animate when scrolled past
});

/* ============================================= */
// Count Up Animation
// document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll(".counter");

//     counters.forEach(counter => {
//         const endVal = parseFloat(counter.getAttribute("data-target"));
//         if (!isNaN(endVal)) {
//             const countUp = new countUp.CountUp(counter, endVal);
//             if (!countUp.error) {
//                 countUp.start();
//             } else {
//                 console.error("CountUp error:", countUp.error);
//             }
//         } else {
//             console.error("Invalid data-target:", counter.getAttribute("data-target"));
//         }
//     });
// });
/* ============================================= */
// Handle Form Submission
function handleSubmit(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    event.target.reset(); // Reset form fields
}
// ==============================================