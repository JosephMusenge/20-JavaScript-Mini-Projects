// Start JavaScript Code
// Declare variables
const loadText = document.querySelector('.load-text');
const bg = document.querySelector('.background');
let load = 0;
let percent = setInterval(blurImage, 30);

setTimeout(() => {
    alert("Refresh the window to see the animation again!");
}, 3000);
