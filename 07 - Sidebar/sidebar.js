// Try to work with the code of the last project as an example
// Get all necessary classes and store them in variables
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Add click event on the toggle button
toggleBtn.addEventListener("click", function() {
    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar");
    // }
    // else {
    //     sidebar.classList.add("show-sidebar");
    // }

    sidebar.classList.toggle("show-sidebar"); // This single line does everything that the above code does
})

// Add close click event on the close buttn
closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
})