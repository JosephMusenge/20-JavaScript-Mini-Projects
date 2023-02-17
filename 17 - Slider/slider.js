// Set up variables 
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

// set up some counter
let counter = 0;

nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
});

// function to translate slide in the X direction
function carousel() {
    // working with slides
    // if (counter === slides.length) {
    //     counter = 0;
    // }

    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // Hide next button at the end of slide show
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } 
    else {
        nextBtn.style.display = "none";
    }

    // Hide prev button at the beginning of slide show
    if (counter > 0){
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }
    
    // translate slide in X direction
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

// Hide previous button lonce page loadsa
prevBtn.style.display = "none";