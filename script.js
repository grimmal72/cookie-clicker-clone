// Accessing DOM elements
const cookieHeading = document.querySelector("#cookie-heading");
const cookieButton = document.querySelector("#cookie-button");

//These are also for accessing DOM elements, but are specifically for the cookie upgrade system
const autoBakerHeading = document.querySelector("#auto-baker-heading");
const autoBakerButton = document.querySelector("#auto-baker-button");
const grandmasHeading = document.querySelector("#grandmas-heading");
const grandmasButton = document.querySelector("#grandmas-button");
const cookieFarmHeading = document.querySelector("#cookie-farm-heading");
const cookieFarmButton = document.querySelector("#cookie-farm-button");

// Game variables
let cookies = 0;
let cost = 5;
let cookiesPerSecond = 0;

let autoBakersAmount = 0;
let grandmasAmount = 0;
let cookieFarmAmount = 0;

// Event listener for the non-automatic cookie button (the one that the player can click a lot if they want)
cookieButton.addEventListener("click", function() {
    cookies += 1;
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
});

// Event listeners for the cookie upgrades
autoBakerButton.addEventListener("click", () => {
    if(cookies >= 5) {
        cookies -= 5;
        cookiesPerSecond += 1;
        autoBakersAmount += 1;
    }
});

grandmasButton.addEventListener("click", () => {
    if(cookies >= 200) {
        cookies -= 200;
        cookiesPerSecond += 30;
        grandmasAmount += 1;
    }
});

cookieFarmButton.addEventListener("click", () => {
    if(cookies >= 1000) {
        cookies -= 1000;
        cookiesPerSecond += 150;
        cookieFarmAmount += 1;
    }
});

// Functions
function cookieAccumulator() {
    cookies += cookiesPerSecond;
}

// Game loop
window.setInterval(function() {
    cookieAccumulator();
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
    autoBakerHeading.innerHTML = `Autobakers: ${autoBakersAmount}`;
    grandmasHeading.innerHTML = `Grandmas: ${grandmasAmount}`;
    cookieFarmHeading.innerHTML = `Cookie Farms: ${cookieFarmAmount}`;
}, 250);

// experiment: lets try to add a second buy option
