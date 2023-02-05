// Variables - get all necessary items
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;

    if (id) {
        // remove active class from all the buttons
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        })

        // hide active class from all the articles 
        articles.forEach(function(article) {
            article.classList.remove("active");
        })

        // add the active class to the current target
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})