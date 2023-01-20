// Set initial counter
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Loop through all the buttons
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) { // Add an event listener on each button
        const styles = e.currentTarget.classList; // get the classes of the current event/button and store in the styles variable
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        // Change color of value count
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
})