// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Add event listener on toggle button
navToggle.addEventListener("click", function() {
    // console.log(links.classList);
    // console.log(links.classList.contains("random-class"));
    // console.log(links.classList.contains("show-links"));

    if (links.classList.contains("show-links")) { // If links contains a class called "show-links"
        links.classList.remove("show-links"); // Then remove that "show-links" class
    } 
    else {
        links.classList.add("show-links"); // If not, then add it
    }

    // All the functionality from the code above can be done with a one-liner toggle method
    // links.classList.toggle("show-links");
})