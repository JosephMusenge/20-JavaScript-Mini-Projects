// Solution one: traversing the dom
const btns = document.querySelectorAll(".question-btn");

// Loop over all the buttons
btns.forEach(function(btn) {
    // add a click event listener to every btn
    btn.addEventListener("click", function(e) {
        const questions = e.currentTarget.parentElement.parentElement; //Select parent of the parent element of the current btn
        questions.classList.toggle("show-text");
    })
})

// Solution two: using selectors inside the element