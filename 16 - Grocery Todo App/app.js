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
// clear items 
clearBtn.addEventListener("click", clearItems);


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
        
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        // delete button
        deleteBtn.addEventListener("click", deleteItem);
        // edit button
        editBtn.addEventListener("click", editItem);
        // append child
        list.appendChild(element);
        // display alert when element is added to list
        displayAlert("item added to the list", "success");
        // And now show container
        container.classList.add("show-container");
        // add local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        // edit items
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
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

// clear items function
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete item function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item deleted", "success");
    setBackToDefault();
    // remove from local storage 
    // removeFromLocalStorage(id);
}
// edit item function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit items
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML; // once edit is clicked the value will be in the search field
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit"; // change value in the submit btn
}
// edit item function
// Set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    // console.log("added to local storage");
    const grocery = { id, value };
    let items = getLocalStorege();

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorege();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
};

function editLocalStorage(id, value) {};

// set up get storage function
function getLocalStorege() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
// ****** SETUP ITEMS **********
