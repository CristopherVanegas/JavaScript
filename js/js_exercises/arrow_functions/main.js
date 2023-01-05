// ARROW FUNCTIONS //

// For simple addition funcs
function sum(a, b) {
    return a + b
}

// arrow ->
let sum2 = (a, b) => {
    return a + b
}

// or 

let sum = (a, b) => { return a + b }

function isPositive (number) {
    return number >= 0
}


// For validation funcs
let isPositive = (number) => number >= 0

function randomNumber() {
    return Math.random
}

// arrow ->
let randomNumber = () => Math.random


// For DOM Manipulation funcs
document.addEventListener('click', function() {
    console.log('Click');
})

// arrow ->
document.addEventListener('click', () => console.log('Click'));
