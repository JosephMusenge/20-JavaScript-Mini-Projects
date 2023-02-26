// Get all variables 
const toggleBtn = document.querySelector(".toggle");
const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");
const hoursElement = document.querySelector(".hour");
const minutesElement = document.querySelector(".minute");
const secondsElement = document.querySelector(".second");

// Store week days in array
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Store months in array
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Add event listener on dark mode button to change btn light and dark modes
toggleBtn.addEventListener("click", function(e) {
    const html = document.querySelector("html");

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add('dark');
        e.target.innerHTML = "Light Mode";
    }
})

// Get the time, date, etc. function
function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hoursElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minutesElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondsElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateElement.innerHTML = `${weekDays[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Call setaTime function
setTime();

// Set time interval
setInterval(setTime, 1000);