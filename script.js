// JavaScript for mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Slideshow JavaScript
let slideIndex = 0;
let slides = document.getElementsByClassName('slide');
let autoPlay = true;
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
}

function startSlideShow() {
    showSlides();
    slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    clearInterval(slideInterval);
    autoPlay = false;
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlideManually(slideIndex);
}

function showSlideManually(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n - 1].style.display = 'block';
}

// Event listeners for next and prev
document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
});

// Start the slideshow
startSlideShow();
