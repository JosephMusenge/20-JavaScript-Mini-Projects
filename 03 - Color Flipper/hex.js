const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");

// Add click event on the button
btn.addEventListener('click', function() {
    let hexColor = "#";
    // get a 6 digit number to append to #
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    };

    colors.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// Generate random number function
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}