// script.js

// Variable declarations
let greeting = "Hello, World!";
let count = 0;

// Function to display greeting in the console
function displayGreeting() {
    console.log(greeting);
}

// Function to increment count and update the DOM
function incrementCount() {
    count++;
    document.getElementById("countDisplay").innerText = `Count: ${count}`;
}

// Call the displayGreeting function
displayGreeting();

// Loop example 1: For loop to log numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop example 2: While loop to decrement count from 5 to 1
while (count < 5) {
    count++;
    console.log(count);
}

// DOM interaction 1: Change the background color of the body
document.body.style.backgroundColor = "#f0f0f0";

// DOM interaction 2: Create a button and add it to the DOM
let button = document.createElement("button");
button.innerText = "Increment Count";
button.onclick = incrementCount;
document.body.appendChild(button);

// DOM interaction 3: Display the initial count on the page
let countDisplay = document.createElement("div");
countDisplay.id = "countDisplay";
countDisplay.innerText = `Count: ${count}`;
document.body.appendChild(countDisplay);