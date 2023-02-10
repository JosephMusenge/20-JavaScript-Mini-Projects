// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-form");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
// **** set up some variables ****
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value; // get value of the grocery input
    
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");
        // add class
        element.classList.add("grocery-item");
        // set up attribute and add class
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
                </div>`
        // append child
        list.appendChild(element);
        // display alert when element is added to list
        displayAlert("item added to the list", "success");
        // And now show container
        container.classList.add("show-container");
    } else if (value && editFlag) {
        console.log("editing");
    } else {
        displayAlert("please enter value", "danger");
    }
}

// display alert function
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`); 
    }, 100);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
