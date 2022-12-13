// Accessing DOM elements
const cookieHeading = document.querySelector("#cookie-heading");
const cookieButton = document.querySelector("#cookie-button");

//These are also for accessing DOM elements, but are specifically for the cookie upgrade system
const autoBakersHeading = document.querySelector("#auto-bakers-heading");
const autoBakersButton = document.querySelector("#auto-bakers-button");
const grandmasHeading = document.querySelector("#grandmas-heading");
const grandmasButton = document.querySelector("#grandmas-button");
const cookieFarmsHeading = document.querySelector("#cookie-farms-heading");
const cookieFarmsButton = document.querySelector("#cookie-farms-button");

const cookieMinesHeading = document.querySelector("#cookie-mines-heading");
const cookieMinesButton = document.querySelector("#cookie-mines-button");
const cookieFactoriesHeading = document.querySelector("#cookie-factories-heading");
const cookieFactoriesButton = document.querySelector("#cookie-factories-button");

// Game variables
let cookies = 0;
let cost = 5;
let cookiesPerSecond = 0;

let autoBakersAmount = 0; // Note: in the real game the first upgrade is cursor but I like this idea better
let grandmasAmount = 0;
let cookieFarmsAmount = 0;
let cookieMinesAmount = 0;
let cookieFactoriesAmount = 0;

// Event listener for the non-automatic cookie button (the one that the player can click a lot if they want)
cookieButton.addEventListener("click", function() {
    cookies += 1;
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
});

// Event listeners for the cookie upgrades
autoBakersButton.addEventListener("click", () => {
    if(cookies >= 5) {
        cookies -= 5;
        cookiesPerSecond += 1;
        autoBakersAmount += 1;
    }
});

grandmasButton.addEventListener("click", () => {
    if(cookies >= 200) {
        cookies -= 200;
        cookiesPerSecond += 25;
        grandmasAmount += 1;
    }
});

cookieFarmsButton.addEventListener("click", () => {
    if(cookies >= 1000) {
        cookies -= 1000;
        cookiesPerSecond += 150;
        cookieFarmsAmount += 1;
    }
});

cookieMinesButton.addEventListener("click", () => {
    if(cookies >= 2000) {
        cookies -= 2000;
        cookiesPerSecond += 320;
        cookieMinesAmount += 1;
    }
});

cookieFactoriesButton.addEventListener("click", () => {
    if(cookies >= 5000) {
        cookies -= 5000;
        cookiesPerSecond += 1000;
        cookieFactoriesAmount += 1;
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

    autoBakersHeading.innerHTML = `Autobakers: ${autoBakersAmount}`;
    grandmasHeading.innerHTML = `Grandmas: ${grandmasAmount}`;
    cookieFarmsHeading.innerHTML = `Cookie Farms: ${cookieFarmsAmount}`;
    cookieMinesHeading.innerHTML = `Cookie Mines: ${cookieMinesAmount}`;
    cookieFactoriesHeading.innerHTML = `Cookie Factories: ${cookieFactoriesAmount}`;
}, 250);
