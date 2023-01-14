// JAVASCRIPT STARTS HERE!

// This will return all the divs that have a class 'panel' in the form of an array
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    //Using an arrow function here 
    panel.addEventListener('click', () => {
        removeActiveClasses();
        // With a click we'll add the class "active" to the clicked panel
        panel.classList.add('active');
    })
});

// Function to remove the class "active" from all the panels
function removeActiveClasses() {
    // Here we are using the arrow function similar to line 5
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}