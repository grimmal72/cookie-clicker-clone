// Accessing DOM elements
const cookieHeading = document.querySelector("#cookie-heading");
const cookieButton = document.querySelector("#cookie-button");

//These are also for accessing DOM elements, but are specifically for the cookie upgrade system
const autoBakersHeading = document.querySelector("#auto-bakers-heading");
const autoBakersButton = document.querySelector(".auto-bakers-button");
const grandmasHeading = document.querySelector("#grandmas-heading");
const grandmasButton = document.querySelector(".grandmas-button");
const cookieFarmsHeading = document.querySelector("#cookie-farms-heading");
const cookieFarmsButton = document.querySelector(".cookie-farms-button");

const cookieMinesHeading = document.querySelector("#cookie-mines-heading");
const cookieMinesButton = document.querySelector(".cookie-mines-button");
const cookieFactoriesHeading = document.querySelector("#cookie-factories-heading");
const cookieFactoriesButton = document.querySelector(".cookie-factories-button");

// Game variables
let cookies = 0;
let cost = 5;
let cookiesPerSecond = 0;

let autoBakersAmount = 0; // Note: in the real game the first upgrade is cursor but I like this idea better
let grandmasAmount = 0;
let cookieFarmsAmount = 0;
let cookieMinesAmount = 0;
let cookieFactoriesAmount = 0;

// Setting the store upgrades to red font-style and grayed out button initially to imply that we can't buy the upgrades.
document.getElementById("auto-bakers-heading").style.color = "red"; // the red text
document.getElementById("grandmas-heading").style.color = "red";
document.getElementById("cookie-farms-heading").style.color = "red";
document.getElementById("cookie-mines-heading").style.color = "red";
document.getElementById("cookie-factories-heading").style.color = "red";

// Initializing the upgrades images, such as the pictures of grandmas and factories
let imgAutoBakersUpgrade = document.createElement("img");
imgAutoBakersUpgrade.src = "upgradesImages/autoBakers.jpg";
imgAutoBakersUpgrade.width = 70;
imgAutoBakersUpgrade.height = 70;
document.getElementById("upgrade-square-1").appendChild(imgAutoBakersUpgrade);

let imgGrandmaUpgrade = document.createElement("img");
imgGrandmaUpgrade.src = "upgradesImages/grandmaUpgrade.jpg";
imgGrandmaUpgrade.width = 70;
imgGrandmaUpgrade.height = 70;
document.getElementById("upgrade-square-2").appendChild(imgGrandmaUpgrade);

let imgCookieFarmsUpgrade = document.createElement("img");
imgCookieFarmsUpgrade.src = "upgradesImages/cookieFarm.jpg";
imgCookieFarmsUpgrade.width = 70;
imgCookieFarmsUpgrade.height = 70;
document.getElementById("upgrade-square-3").appendChild(imgCookieFarmsUpgrade);

let imgGrandmaUpgrade2 = document.createElement("img");
imgGrandmaUpgrade2.src = "upgradesImages/grandmaUpgrade2.jpg";
imgGrandmaUpgrade2.width = 70;
imgGrandmaUpgrade2.height = 70;
document.getElementById("upgrade-square-4").appendChild(imgGrandmaUpgrade2);

let imgCookieMinesUpgrade = document.createElement("img");
imgCookieMinesUpgrade.src = "upgradesImages/cookieMines.jpg";
imgCookieMinesUpgrade.width = 70;
imgCookieMinesUpgrade.height = 70;
document.getElementById("upgrade-square-5").appendChild(imgCookieMinesUpgrade);

let imgCookieFactoriesUpgrade = document.createElement("img");
imgCookieFactoriesUpgrade.src = "upgradesImages/cookieFactory.jpg";
imgCookieFactoriesUpgrade.width = 70;
imgCookieFactoriesUpgrade.height = 70;
document.getElementById("upgrade-square-6").appendChild(imgCookieFactoriesUpgrade);

let imgCookieBankUpgrade = document.createElement("img");
imgCookieBankUpgrade.src = "upgradesImages/cookieBank.jpg";
imgCookieBankUpgrade.width = 70;
imgCookieBankUpgrade.height = 70;
document.getElementById("upgrade-square-7").appendChild(imgCookieBankUpgrade);

let imgCookieTempleUpgrade = document.createElement("img");
imgCookieTempleUpgrade.src = "upgradesImages/cookieTemple.jpg";
imgCookieTempleUpgrade.width = 70;
imgCookieTempleUpgrade.height = 70;
document.getElementById("upgrade-square-8").appendChild(imgCookieTempleUpgrade);

let imgWizardTowerUpgrade = document.createElement("img");
imgWizardTowerUpgrade.src = "upgradesImages/wizardTower.jpg";
imgWizardTowerUpgrade.width = 70;
imgWizardTowerUpgrade.height = 70;
document.getElementById("upgrade-square-9").appendChild(imgWizardTowerUpgrade);

let imgJustFuckingDoItUpgrade = document.createElement("img");
imgJustFuckingDoItUpgrade.src = "upgradesImages/justFuckingDoIt.jpg";
imgJustFuckingDoItUpgrade.width = 70;
imgJustFuckingDoItUpgrade.height = 70;
document.getElementById("upgrade-square-10").appendChild(imgJustFuckingDoItUpgrade);

// Purchase prices for compounders - these will use template literal placeholder variables
let autoBakersPrice = 5;
let grandmasPrice = 200;
let cookieFarmsPrice = 1000;
let cookieMinesPrice = 2000;
let cookieFactoriesPrice = 5000;



// Event listener for the non-automatic cookie button (the one that the player can click a lot if they want)
cookieButton.addEventListener("click", function() {
    cookies += 1;
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
});

let autoBakersCPS = 1; // come back to this after setting up upgrades divs. i'm going to use a template literal on autoBakerButton right after that. it will look like `cookiesPerSecond += 1 * ${upgradesMultiplier}` or `cookiesPerSecond += 1000 * ${upgradesMultiplier}`, where the CPM of 1 belongs to the autobakers and the CPM of 1000 belongs to the factories

// Event listeners for the compounder purchases
autoBakersButton.addEventListener("click", () => {
    if(cookies >= `${autoBakersPrice}`) {
        cookies -= `${autoBakersPrice}`;
        cookiesPerSecond += 1; // this line could change to include a template literal. How it will work is that when you buy upgrade squares they will modify the multiplier for this
        autoBakersAmount += 1;
    }
});

grandmasButton.addEventListener("click", () => {
    if(cookies >= `${grandmasPrice}`) {
        cookies -= `${grandmasPrice}`;
        cookiesPerSecond += 25;
        grandmasAmount += 1;
        document.getElementById("grandmas-heading").style.color = "green";
    }
});

cookieFarmsButton.addEventListener("click", () => {
    if(cookies >= `${cookieFarmsPrice}`) {
        cookies -= `${cookieFarmsPrice}`;
        cookiesPerSecond += 150;
        cookieFarmsAmount += 1;
        document.getElementById("cookie-farms-heading").style.color = "green";
    }
});

cookieMinesButton.addEventListener("click", () => {
    if(cookies >= `${cookieMinesPrice}`) {
        cookies -= `${cookieMinesPrice}`;
        cookiesPerSecond += 320;
        cookieMinesAmount += 1;
        document.getElementById("cookie-mines-heading").style.color = "green";
    }
});

cookieFactoriesButton.addEventListener("click", () => {
    if(cookies >= `${cookieFactoriesPrice}`) {
        cookies -= `${cookieFactoriesPrice}`;
        cookiesPerSecond += 1000;
        cookieFactoriesAmount += 1;
        document.getElementById("cookie-factories-heading").style.color = "green";
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

    if(cookies >= `${autoBakersPrice}`) {
        document.getElementById("auto-bakers-heading").style.color = "lime";
    } else {
        document.getElementById("auto-bakers-heading").style.color = "red";
    }

    if(cookies >= `${grandmasPrice}`) {
        document.getElementById("grandmas-heading").style.color = "lime";
    } else {
        document.getElementById("grandmas-heading").style.color = "red";
    }

    if(cookies >= `${cookieFarmsPrice}`) {
        document.getElementById("cookie-farms-heading").style.color = "lime";
    } else {
        document.getElementById("cookie-farms-heading").style.color = "red";
    }

    if(cookies >= `${cookieMinesPrice}`) {
        document.getElementById("cookie-mines-heading").style.color = "lime";
    } else {
        document.getElementById("cookie-mines-heading").style.color = "red";
    }

    if(cookies >= `${cookieFactoriesPrice}`) {
        document.getElementById("cookie-factories-heading").style.color = "lime";
    } else {
        document.getElementById("cookie-factories-heading").style.color = "red";
    }

}, 250);

// Using lime instead of green in the conditionals because it looks a lot nicer and less muddy
