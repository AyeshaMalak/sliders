// Basic Manual Slider
let currentSlide1 = 0;
function showSlide1(index) {
    const slides = document.querySelector('.slider .slides');
    const totalSlides = document.querySelectorAll('.slider .slide').length;
    currentSlide1 = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide1 * 100}%)`;
}
function prevSlide1() { showSlide1(currentSlide1 - 1); }
function nextSlide1() { showSlide1(currentSlide1 + 1); }
window.onload = () => showSlide1(currentSlide1);

// Auto Sliding Carousel
let currentSlide2 = 0;
function autoSlide2() {
    const slides = document.querySelector('.carousel .carousel-slides');
    const totalSlides = document.querySelectorAll('.carousel .carousel-slide').length;
    currentSlide2 = (currentSlide2 + 1) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide2 * 100}%)`;
}
setInterval(autoSlide2, 3000);

// Fade-in Slider
let currentSlide3 = 0;
function showFadeSlide() {
    const slides = document.querySelectorAll('.fade-slider .fade-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide3].classList.add('active');
    currentSlide3 = (currentSlide3 + 1) % slides.length;
}
setInterval(showFadeSlide, 3000);

// Thumbnail Navigation Slider
const thumbnails = document.querySelectorAll('.thumbnail-slider .thumb-slide');
const mainImage = document.getElementById('mainImage');
function showSlide4(index) {
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
    mainImage.src = thumbnails[index].src;
}
thumbnails.forEach((thumb, index) => thumb.addEventListener('click', () => showSlide4(index)));
