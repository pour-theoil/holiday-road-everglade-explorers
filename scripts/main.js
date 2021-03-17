import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"

import { getAttractions } from "./attractions/AttractionProvider.js"
import { parksDetailsModal } from "./modal/details.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import { entryLoopLog } from "./attractions/ListManager.js"
import { entryEateryLoop } from "./eateries/ListManager.js"
import { entryParksLoop, parkCard } from "./parks/ListManager.js"
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
    const parkSelector = event.target.value
    if (event.target.id === "choosePark") {
        console.log(`user wants to pick ${parkSelector}`)
        parkCard(parkSelector)
    }
})


dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseAttractions") {
        const attractionSelector = event.target.value
        console.log(`user wants to pick ${attractionSelector}`)
        return attractionSelector
    }
})

dropdownElement.addEventListener("change", event => {
    if (event.target.id === "chooseEatery") {
        const eaterySelector = event.target.value
        console.log(`user wants to pick ${eaterySelector}`)
        return eaterySelector
    }
})
// document.getElementById("#chooseEatery").selectedIndex = -1;

// let select = document.querySelector("#choosePark");
// let result = document.querySelector(".parkCard");
// select.addEventListener("change", event => {
//     result.textContent = event.value
// })
    






const tentativeItenerary = document.querySelector(".itineraryPreview")


tentativeItenerary.addEventListener("click", event =>{
    console.log(event.target.id)
    if (event.target.id === "ParkDetails") {
        console.log("where is the modal")
        const modal = document.getElementById("natParksDetails")
        modal.style.display = "block";
    }
} )

tentativeItenerary.addEventListener("click", event =>{
    console.log(event.target.id)
    if (event.target.id === "closeparkdets") {
        const modal = document.getElementById("natParksDetails")
        modal.style.display = "none";
    }
} )
