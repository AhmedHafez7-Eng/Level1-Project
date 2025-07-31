// By: Ahmed Hafez

/* ============================================= */

// Record time as early as possible (top of file)
const loaderStartTime = Date.now();
const MIN_DISPLAY = 4000; // 4 seconds

// This should go at the bottom of your main.js:
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const elapsed = Date.now() - loaderStartTime;
    const waitTime = Math.max(0, MIN_DISPLAY - elapsed);

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500); // match fade transition
        }
    }, waitTime);
});

/* ============================================= */
// Initialize Swiper for Testimonials
const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Small screens
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

/* ============================================= */
// Initialize AOS (Animate On Scroll)

AOS.init({
    duration: 1200, // Animation duration in milliseconds
    //once: true, // Whether animation should happen only once
    mirror: false, // Whether elements should animate when scrolled past
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
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    const expanded = navLinks.classList.toggle("active");
    const isExpanded = navLinks.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
    navLinks.setAttribute("aria-expanded", isExpanded);
});

// Optional: Highlight active link on click
navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
        navAnchors.forEach((a) => a.classList.remove("active"));
        link.classList.add("active");

        // Close the menu after clicking in mobile
        if (window.innerWidth <= 768) {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", false);
            navLinks.setAttribute("aria-expanded", false);
        }
    });
});
// ==============================================
