import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"

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

    
// document.getElementById("#chooseEatery").selectedIndex = -1;


// event listeners
const dropdownElement = document.querySelector(".itinerary");

dropdownElement.addEventListener("change", event => {
    if(event.target.id === "choosePark") {
        const parkSelector = event.target.value
        console.log(`user wants to pick ${parkSelector}`)
        return parkSelector
        const parkCardElement = document.querySelector(".parkCard");
        parkCardElement.innerHTML = 
    }
})

dropdownElement.addEventListener("change", event => {
    if(event.target.id === "chooseAttractions") {
        const attractionSelector = event.target.value
        console.log(`user wants to pick ${attractionSelector}`)
    }
})

dropdownElement.addEventListener("change", event => {
    if(event.target.id === "chooseEatery") {
        const eaterySelector = event.target.value
        console.log(`user wants to pick ${eaterySelector}`)
    }
})