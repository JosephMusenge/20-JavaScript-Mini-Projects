const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2023, 07, 29, 23, 59, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 15, 23, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];

// const secs = futureDate.getSeconds();
// Set giveaway date dynamically
giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} at ${hours}:${minutes}pm`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime(); // this value is in ms
  // console.log(currentTime);
  const timeDiff = futureTime - currentTime;

  // values in ms - because currentTime is in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // now we can calculate all values in ms
  let days = Math.floor(timeDiff / oneDay);
  // console.log(days);
  let hours = Math.floor((timeDiff % oneDay) / oneHour); // get the hours from the remaining value after we have days
  let minutes = Math.floor((timeDiff % oneHour) / oneMin);
  let seconds = Math.floor((timeDiff % oneMin) / 1000);

  // array
  let values = [days, hours, minutes, seconds];

  // if values are less than 10, then add a 0 in front
  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  })

  // when we are past deadline
  if (timeDiff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has ended.</h4>`
  }
}

// set countdown with interval
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();