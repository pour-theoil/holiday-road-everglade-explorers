import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"
import { parksDetailsModal } from "./modal/details.js"
import {getAttractions} from "./attractions/AttractionProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import {entryLoopLog} from "./attractions/ListManager.js"
import {entryEateryLoop} from "./eateries/ListManager.js"
import {entryParksLoop} from "./parks/ListManager.js"


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