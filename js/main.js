const title = "Planeten";
const subTitle = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];

//Opdracht 1: querySelector + textContent
const h1Element = document.querySelector(".h1");
h1Element.textContent = "Workshop";


function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}

//Opdracht 2: querySelectorAll + for-loop
const olElement = document.querySelector(".planets")
olElement.innerHTML = "";
for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    console.log(planet);
    olElement.innerHTML += `<li> ${planet} </li>`;
}

