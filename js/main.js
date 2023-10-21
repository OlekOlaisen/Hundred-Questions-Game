const slideshowContainer = document.querySelector('.slideshow-container');

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

// Swipe functionality
let startX;
slideshowContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slideshowContainer.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;

    let activeSlide = document.querySelector('.active-slide');
    if (diffX > 50) { // swipe left
        let nextSlide = activeSlide.nextElementSibling;
        if (nextSlide && nextSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            nextSlide.classList.add('active-slide');
        }
    } else if (diffX < -50) { // swipe right
        let prevSlide = activeSlide.previousElementSibling;
        if (prevSlide && prevSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            prevSlide.classList.add('active-slide');
        }
    }
});
