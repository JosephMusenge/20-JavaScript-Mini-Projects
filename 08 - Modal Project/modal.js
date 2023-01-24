// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// Select all necessary items and store in variables
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// Listen for click event on modal button
modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
})

// Listen for click event on close-btn
closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal");
})