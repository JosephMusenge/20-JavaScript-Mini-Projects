// Solution one: using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function() {
        // Close one btn if another is open
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
    })
})


// Solution two: traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// Loop over all the buttons
// btns.forEach(function(btn) {
//     // add a click event listener to every btn
//     btn.addEventListener("click", function(e) {
//         const questions = e.currentTarget.parentElement.parentElement; //Select parent of the parent element of the current btn
//         questions.classList.toggle("show-text");
//     })
// })
