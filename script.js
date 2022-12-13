// Accessing DOM elements
const clickHeading = document.querySelector("#click-heading");
const autoHeading = document.querySelector("#auto-heading");
const clickButton = document.querySelector("#click-button");
const autoButton = document.querySelector("#auto-button");

// Game variables
let clicks = 0;
let cost = 5;
let clicksPerSecond = 0;
let autoClickerAmount = 0;

// Event listener
clickButton.addEventListener("click", function() {
    clicks += 1;
    clickHeading.innerHTML = `Clicks: ${clicks}`;
});

autoButton.addEventListener("click", () => {
    if(clicks >= 5) {
        clicks -= 5;
        clicksPerSecond += 1;
        autoClickerAmount += 1;
    }
});

// Functions
function autoClicker() {
    clicks += clicksPerSecond;
}

// Game loop
window.setInterval(function () {
    autoClicker();
    clickHeading.innerHTML = `Clicks: ${clicks}`;
    autoHeading.innerHTML = `Autoclickers: ${autoClickerAmount}`;
}, 500);