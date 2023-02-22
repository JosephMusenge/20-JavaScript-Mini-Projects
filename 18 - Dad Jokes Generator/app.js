// JavaScript code starts here!

// Get all variables
const button = document.getElementById('jokeBtn');
const jokeElement = document.getElementById('joke');

// Add click event on button 
button.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    };

    // Request joke from API and load it using the fetch() method
    const result = await fetch('https://icanhazdadjoke.com', config)

    const data = await result.json();

    jokeElement.innerHTML = data.joke;

};


/* ******** METHOD TWO *********** */

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeElement.innerHTML = data.joke;
//         })
//         .catch(error => console.log(error));
// }

/* ***************************************************************************** */