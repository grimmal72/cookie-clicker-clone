// Accessing DOM elements
const cookieHeading = document.querySelector("#cookie-heading");
const autoHeading = document.querySelector("#auto-heading");
const cookieButton = document.querySelector("#cookie-button");
const autoButton = document.querySelector("#auto-button");

// Game variables
let cookies = 0;
let cost = 5;
let cookiesPerSecond = 0;
let autoBakerAmount = 0;

// Event listener
cookieButton.addEventListener("click", function() {
    cookies += 1;
    cookieHeading.innerHTML = `Clicks: ${clicks}`;
});

autoButton.addEventListener("click", () => {
    if(cookies >= 5) {
        cookies -= 5;
        cookiesPerSecond += 1;
        autoBakerAmount += 1;
    }
});

// Functions
function autoBaker() {
    cookies += cookiesPerSecond;
}

// Game loop
window.setInterval(function () {
    autoBaker();
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
    autoHeading.innerHTML = `Autobakers: ${autoBakerAmount}`;
}, 500);

// experiment: lets try to add a second buy option
