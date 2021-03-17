import { getAttractions } from "./attractions/AttractionProvider.js"
import { parksDetailsModal } from "./modal/details.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import { entryLoopLog } from "./attractions/ListManager.js"
import { entryEateryLoop, eateryCard } from "./eateries/ListManager.js"
import { entryParksLoop, parkCard } from "./parks/ListManager.js"


entryLoopLog()
entryEateryLoop()
entryParksLoop()

getAttractions();
const fiveday = () => {
    getWeather("37.58", "-85.67", settings.weatherKey)
        .then(dailyweather => {
            return getForcast(dailyweather);
        });
}


// event listeners for dropdowns
const dropdownElement = document.querySelector(".itinerary");

// park dropdown
dropdownElement.addEventListener("change", event => {
    const parkSelector = event.target.value
    if (event.target.id === "choosePark") {
        console.log(`user wants to pick ${parkSelector}`)
        parkCard(parkSelector)
    }
})

// attraction dropdown
dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseAttractions") {
        const attractionSelector = event.target.value
        console.log(`user wants to pick ${attractionSelector}`)
        return attractionSelector
    }
})

// eatery dropdown
dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseEatery") {
        const eaterySelector = event.target.value
        console.log(`user wants to pick ${eaterySelector}`)
        eateryCard(eaterySelector)
    }
})
    









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
