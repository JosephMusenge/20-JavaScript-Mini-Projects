// Start JavaScript Code

// Declare variables
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.background');
let load = 0;
// Calling the blurImage function every 30ms
let percent = setInterval(blurImage, 30);

// A message will be displayed after 3 seconds
setTimeout(() => {
    alert("Refresh the window to see the animation again!");
}, 3000);

function blurImage() {
    // Increment te load value from 0 to 100
    load++;
    if (load > 99) {
        clearInterval(percent);
    }
    // Updateing the percentage text with each function call
    loadText.innerText = `${load}%`;
    // Handling the blur value of the background image
    loadText.style.opacity = scale(load,0,100,1,0);

    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

// Scale function used to convert a range of values to another range of values e.e 0 to 100 t0 0 to 1
const scale = (
    num, 
    in_min, 
    in_max, 
    in_max, 
    out_max
) => {
    return (
        ((num - in_min) * (out_max - out_min)) / 
        (in_max - in_min) + 
        out_min
    );
};