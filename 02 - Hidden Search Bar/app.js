// JavaScript Code Starts Here
// Declare all necessary variables and utilize DOM
const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

// Function
button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})