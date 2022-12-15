// Accessing DOM elements
const cookieHeading = document.querySelector("#cookie-heading");
const cookieButton = document.querySelector("#cookie-button");

//These are also for accessing DOM elements, but are specifically for the CPS compounding purchases system
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

const cookieBanksHeading = document.querySelector("#cookie-banks-heading");
const cookieBanksButton = document.querySelector(".cookie-banks-button");
const cookieTemplesHeading = document.querySelector("#cookie-temples-heading");
const cookieTemplesButton = document.querySelector(".cookie-temples-button");

const wizardTowersHeading = document.querySelector("#wizard-towers-heading");
const wizardTowersButton = document.querySelector(".wizard-towers-button");
const justFuckingDoItHeading = document.querySelector("#just-fucking-do-it-heading");
const justFuckingDoItButton = document.querySelector(".just-fucking-do-it-button");

// Accessing the DOM elements of the one-time upgrades
const autoBakersOneTimeUpgradeButton = document.querySelector("#upgrade-square-1");
const grandmasOneTimeUpgradeButton = document.querySelector("#upgrade-square-2");
const cookieFarmsOneTimeUpgradeButton = document.querySelector("#upgrade-square-3");
const grandmasOneTimeUpgradeButton2 = document.querySelector("#upgrade-square-4");
const cookieMinesOneTimeUpgradeButton = document.querySelector("#upgrade-square-5");
const cookieFactoriesOneTimeUpgradeButton = document.querySelector("#upgrade-square-6");
const cookieBanksOneTimeUpgradeButton = document.querySelector("#upgrade-square-7");
const cookieTemplesOneTimeUpgradeButton = document.querySelector("#upgrade-square-8");
const cookieWizardTowersOneTimeUpgradeButton = document.querySelector("#upgrade-square-9");
const justFuckingDoItOneTimeUpgradeButton = document.querySelector("#upgrade-square-10");

// Set the multiplier values of the one-time upgrades to 1, so that they can multiply without destroying things (multiplying by zero wouldn't work), and then the value can be updated by the event listener boolean
let autoBakersOneTimeUpgradeMultiplier = 1;
let grandmasOneTimeUpgradeMultiplier = 1;
let cookieFarmsOneTimeUpgradeMultiplier = 1;
let grandmasOneTimeUpgrade2Multiplier = 1;
let cookieMinesOneTimeUpgradeMultiplier = 1;
let cookieFactoriesOneTimeUpgradeMultiplier = 1;
let cookieBanksOneTimeUpgradeMultiplier = 1;
let cookieTemplesOneTimeUpgradeMultiplier = 1;
let cookieWizardTowersOneTimeUpgradeMultiplier = 1;
let justFuckingDoItOneTimeUpgradeMultiplier = 1;


// Game variables
let cookies = 0;
let cost = 5;
let cookiesPerSecond = 0;

let autoBakersAmount = 0; // Note: in the real game the first upgrade is cursor but I like this idea better
let grandmasAmount = 0;
let cookieFarmsAmount = 0;
let cookieMinesAmount = 0;
let cookieFactoriesAmount = 0;
let cookieBanksAmount = 0;
let cookieTemplesAmount = 0;
let wizardTowersAmount = 0;
let justFuckingDoItAmount = 0;

// Setting the store compounders to red font-style and grayed out button initially to imply that we can't buy the compounders.
document.getElementById("auto-bakers-heading").style.color = "red"; // the red text
document.getElementById("grandmas-heading").style.color = "red";
document.getElementById("cookie-farms-heading").style.color = "red";
document.getElementById("cookie-mines-heading").style.color = "red";
document.getElementById("cookie-factories-heading").style.color = "red";
document.getElementById("cookie-banks-heading").style.color = "red";
document.getElementById("cookie-temples-heading").style.color = "red";
document.getElementById("wizard-towers-heading").style.color = "red";
document.getElementById("just-fucking-do-it-heading").style.color = "red";

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
let cookieBanksPrice = 10000;
let cookieTemplesPrice = 100000;
let wizardTowersPrice = 1000000;
let justFuckingDoItPrice = 1000000000

// Purchase prices for one-time upgrades - these will use template literal placeholder variables
let autoBakersOneTimeUpgradePrice = 10000;
let grandmasOneTimeUpgradePrice = 20000;
let cookieFarmsOneTimeUpgradePrice = 30000;
let grandmasOneTimeUpgrade2Price = 40000;
let cookieMinesOneTimeUpgradePrice = 50000;
let cookieFactoriesOneTimeUpgradePrice = 60000;
let cookieBanksOneTimeUpgradePrice = 70000;
let cookieTemplesOneTimeUpgradePrice = 80000;
let cookieWizardTowersOneTimeUpgradePrice = 90000;
let justFuckingDoItOneTimeUpgradePrice = 100000;


// Event listener for the non-automatic cookie button (the one that the player can click a lot if they want)
cookieButton.addEventListener("click", function() {
    cookies += 1;
    cookieHeading.innerHTML = `Cookies: ${cookies}`;
});

// Event listeners for the one-time upgrades
autoBakersOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${autoBakersOneTimeUpgradePrice}`) {
        cookies -= `${autoBakersOneTimeUpgradePrice}`;
        autoBakersOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

grandmasOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${grandmasOneTimeUpgradePrice}`) {
        cookies -= `${grandmasOneTimeUpgradePrice}`;
        grandmasOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieFarmsOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieFarmsOneTimeUpgradePrice}`) {
        cookies -= `${cookieFarmsOneTimeUpgradePrice}`;
        cookieFarmsOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

grandmasOneTimeUpgradeButton2.addEventListener("click", () => {
    if(cookies >= `${grandmasOneTimeUpgrade2Price}`) {
        cookies -= `${grandmasOneTimeUpgrade2Price}`;
        grandmasOneTimeUpgrade2Multiplier = 4;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieMinesOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieMinesOneTimeUpgradePrice}`) {
        cookies -= `${cookieMinesOneTimeUpgradePrice}`;
        cookieMinesOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieFactoriesOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieFactoriesOneTimeUpgradePrice}`) {
        cookies -= `${cookieFactoriesOneTimeUpgradePrice}`;
        cookieFactoriesOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieBanksOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieBanksOneTimeUpgradePrice}`) {
        cookies -= `${cookieBanksOneTimeUpgradePrice}`;
        cookieBanksOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieTemplesOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieTemplesOneTimeUpgradePrice}`) {
        cookies -= `${cookieTemplesOneTimeUpgradePrice}`;
        cookieTemplesOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

cookieWizardTowersOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${cookieWizardTowersOneTimeUpgradePrice}`) {
        cookies -= `${cookieWizardTowersOneTimeUpgradePrice}`;
        cookieWizardTowersOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

justFuckingDoItOneTimeUpgradeButton.addEventListener("click", () => {
    if(cookies >= `${justFuckingDoItOneTimeUpgradePrice}`) {
        cookies -= `${justFuckingDoItOneTimeUpgradePrice}`;
        justFuckingDoItOneTimeUpgradeMultiplier = 2;
       // and then add an attribute of unselectable to the DOM element of <div id="upgrade-square-1"></div>
    }
});

// Event listeners for the compounder purchases
autoBakersButton.addEventListener("click", () => {
    if(cookies >= `${autoBakersPrice}`) {
        cookies -= `${autoBakersPrice}`;
        cookiesPerSecond += (1 * `${autoBakersOneTimeUpgradeMultiplier}`); 
        autoBakersAmount += 1;
        document.getElementById("auto-bakers-heading").style.color = "green";
    }
});

grandmasButton.addEventListener("click", () => {
    if(cookies >= `${grandmasPrice}`) {
        cookies -= `${grandmasPrice}`;
        cookiesPerSecond += (25 * `${grandmasOneTimeUpgradeMultiplier}`);
        grandmasAmount += 1;
        document.getElementById("grandmas-heading").style.color = "green";
    }
});

cookieFarmsButton.addEventListener("click", () => {
    if(cookies >= `${cookieFarmsPrice}`) {
        cookies -= `${cookieFarmsPrice}`;
        cookiesPerSecond += (150 * `${cookieFarmsOneTimeUpgradeMultiplier}`);
        cookieFarmsAmount += 1;
        document.getElementById("cookie-farms-heading").style.color = "green";
    }
});

cookieMinesButton.addEventListener("click", () => {
    if(cookies >= `${cookieMinesPrice}`) {
        cookies -= `${cookieMinesPrice}`;
        cookiesPerSecond += (320 * `${cookieMinesOneTimeUpgradeMultiplier}`);
        cookieMinesAmount += 1;
        document.getElementById("cookie-mines-heading").style.color = "green";
    }
});

cookieFactoriesButton.addEventListener("click", () => {
    if(cookies >= `${cookieFactoriesPrice}`) {
        cookies -= `${cookieFactoriesPrice}`;
        cookiesPerSecond += (1000 * `${cookieFactoriesOneTimeUpgradeMultiplier}`);
        cookieFactoriesAmount += 1;
        document.getElementById("cookie-factories-heading").style.color = "green";
    }
});

cookieBanksButton.addEventListener("click", () => {
    if(cookies >= `${cookieBanksPrice}`) {
        cookies -= `${cookieBanksPrice}`;
        cookiesPerSecond += (1000 * `${cookieBanksOneTimeUpgradeMultiplier}`);
        cookieBanksAmount += 1;
        document.getElementById("cookie-banks-heading").style.color = "green";
    }
});

cookieTemplesButton.addEventListener("click", () => {
    if(cookies >= `${cookieTemplesPrice}`) {
        cookies -= `${cookieTemplesPrice}`;
        cookiesPerSecond += (10000 * `${cookieTemplesOneTimeUpgradeMultiplier}`);
        cookieTemplesAmount += 1;
        document.getElementById("cookie-temples-heading").style.color = "green";
    }
});

wizardTowersButton.addEventListener("click", () => {
    if(cookies >= `${wizardTowersPrice}`) {
        cookies -= `${wizardTowersPrice}`;
        cookiesPerSecond += (100000 * `${cookieWizardTowersOneTimeUpgradeMultiplier}`);
        wizardTowersAmount += 1;
        document.getElementById("wizard-towers-heading").style.color = "green";
    }
});

justFuckingDoItButton.addEventListener("click", () => {
    if(cookies >= `${justFuckingDoItPrice}`) {
        cookies -= `${justFuckingDoItPrice}`;
        cookiesPerSecond += (10000000 * `${justFuckingDoItOneTimeUpgradeMultiplier}`);
        justFuckingDoItAmount += 1;
        document.getElementById("just-fucking-do-it-heading").style.color = "green";
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
    cookieBanksHeading.innerHTML = `Cookie Banks: ${cookieBanksAmount}`;
    cookieTemplesHeading.innerHTML = `Cookie Temples: ${cookieTemplesAmount}`;
    wizardTowersHeading.innerHTML = `Wizard Towers: ${wizardTowersAmount}`;
    justFuckingDoItHeading.innerHTML = `Just Fucking Do It: ${justFuckingDoItAmount}`;

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

    if(cookies >= `${cookieBanksPrice}`) {
        document.getElementById("cookie-banks-heading").style.color = "lime";
    } else {
        document.getElementById("cookie-banks-heading").style.color = "red";
    }

    if(cookies >= `${cookieTemplesPrice}`) {
        document.getElementById("cookie-temples-heading").style.color = "lime";
    } else {
        document.getElementById("cookie-temples-heading").style.color = "red";
    }

    if(cookies >= `${wizardTowersPrice}`) {
        document.getElementById("wizard-towers-heading").style.color = "lime";
    } else {
        document.getElementById("wizard-towers-heading").style.color = "red";
    }

    if(cookies >= `${justFuckingDoItPrice}`) {
        document.getElementById("just-fucking-do-it-heading").style.color = "lime";
    } else {
        document.getElementById("just-fucking-do-it-heading").style.color = "red";
    }
}, 250);

// Using lime instead of green in the conditionals because it looks a lot nicer and less muddy
