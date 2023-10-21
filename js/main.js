const slideshowContainer = document.querySelector('slideshow-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const textArray = [
    "This is slide 1",
    "This is slide 2",
    "This is slide 3",
    "This is slide 4",
    "This is slide 5"
];

// Create slides
textArray.forEach((text, index) => {
    const slide = document.createElement('div');
    slide.classList.add('text-slide');
    slide.textContent = text;
    if (index === 0) slide.classList.add('active-slide');
    slideshowContainer.appendChild(slide);
});

let startX;

function slideHandler(direction) {
    let activeSlide = document.querySelector('.active-slide');
    if (direction === 'left') {
        let nextSlide = activeSlide.nextElementSibling;
        if (nextSlide && nextSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            nextSlide.classList.add('active-slide');
        }
    } else if (direction === 'right') {
        let prevSlide = activeSlide.previousElementSibling;
        if (prevSlide && prevSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            prevSlide.classList.add('active-slide');
        }
    }
}

// Swipe functionality for touch devices
slideshowContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slideshowContainer.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;
    if (diffX > 50) slideHandler('left');
    else if (diffX < -50) slideHandler('right');
});

// Swipe functionality for desktop
slideshowContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    e.preventDefault();
});

slideshowContainer.addEventListener('mouseup', (e) => {
    let endX = e.clientX;
    let diffX = startX - endX;
    if (diffX > 50) slideHandler('left');
    else if (diffX < -50) slideHandler('right');
});

// Button functionality
nextBtn.addEventListener('click', () => slideHandler('left'));
prevBtn.addEventListener('click', () => slideHandler('right'));
