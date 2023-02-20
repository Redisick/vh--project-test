const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

const slideWidth = slides[0].getBoundingClientRect().width;

let ind = 0;

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'rotate(' + 120 * ind +'deg)';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

//leftButton 
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (prevSlide === null){
        prevSlide = slides[slides.length-1];
    }
    ind--;
    
    moveToSlide(track, currentSlide, prevSlide);
});

//right Button 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null){
        nextSlide = slides[0];
    }
    ind++;

    moveToSlide(track, currentSlide, nextSlide);
});