const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 1;

const length = images.length;    //store length of images

// function for next slide
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*900}px)`;
    slideNumber++;
}

// function for get first slide slide
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

// function for previous slide
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*900}px)`;
    slideNumber--;
}

// function to get Last Slide
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*900}px)`;
    slideNumber = length;
}

// right arrow
right.addEventListener('click', ()=> {
    if(slideNumber < length) {
        nextSlide();
    } else {
         getFirstSlide();
    };
});

// left arrow
left.addEventListener('click', ()=> {
    if(slideNumber > 1) {
        prevSlide();
    } else {
         getLastSlide();
    };
});