import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"

import { getAttractions } from "./attractions/AttractionProvider.js"
import { parksDetailsModal } from "./modal/details.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import { entryLoopLog } from "./attractions/ListManager.js"
import { entryEateryLoop } from "./eateries/ListManager.js"
import { entryParksLoop } from "./parks/ListManager.js"
import { parkPreview } from "./preview.js"


entryLoopLog()
entryEateryLoop()
entryParksLoop()
// getParks(settings.npsKey)

getAttractions();
const fiveday = () => {
    getWeather("37.58", "-85.67", settings.weatherKey)
        .then(dailyweather => {
            return getForcast(dailyweather);
        });
}


// document.getElementById("#chooseEatery").selectedIndex = -1;


// event listeners
const dropdownElement = document.querySelector(".itinerary");

dropdownElement.addEventListener("change", event => {
    if (event.target.id === "choosePark") {
        const parkSelector = event.target.value
        console.log(`user wants to pick ${parkSelector}`)
        return parkSelector
    }
    const cardElement = document.querySelector(".parkCard");
    cardElement.innerHTML = parkPreview(parkSelector);
})


dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseAttractions") {
        const attractionSelector = event.target.value
        console.log(`user wants to pick ${attractionSelector}`)
    }
})

dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseEatery") {
        const eaterySelector = event.target.value
        console.log(`user wants to pick ${eaterySelector}`)
    }
})
// document.getElementById("#chooseEatery").selectedIndex = -1;

// let select = document.querySelector("#choosePark");
// let result = document.querySelector(".parkCard");
// select.addEventListener("change", event => {
//     result.textContent = event.value
// })
    









const showdetailsmodal = () => {
    //Get a reference to the location on the DOM where the nav will display
    const parkDetailsElement = document.querySelector(".parkCard");
	parkDetailsElement.innerHTML = parksDetailsModal("this is a test");
}
showdetailsmodal();

// Get the modal

const modal = document.getElementById("natParksDetails");

// Get the button that opens the modal
const btn = document.getElementById("parkDetails");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("clickevent")
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
