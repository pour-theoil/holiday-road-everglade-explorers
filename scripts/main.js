import { getAttractions } from "./attractions/AttractionProvider.js"
import { parksDetailsModal } from "./modal/details.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import { entryLoopLog, attractionCard } from "./attractions/ListManager.js"
import { entryEateryLoop, eateryCard } from "./eateries/ListManager.js"
import { entryParksLoop, parkCard } from "./parks/ListManager.js";
import {saveItin,getSavedItinerary,loadSavedItinerary} from "./savedItinerary/saveItinerary.js"


entryLoopLog()
entryEateryLoop()
entryParksLoop()
getSavedItinerary()
getAttractions();
const fiveday = () => {
    getWeather("37.58", "-85.67", settings.weatherKey)
        .then(dailyweather => {
            return getForcast(dailyweather);
        });
}


// event listeners for dropdowns
const dropdownElement = document.querySelector(".itinerary");
const btnsave = document.querySelector("#btnSaveItinerary");
const listItinerary = document.querySelector("#ul-savedItinerary");
btnsave.disabled = true;
//save itinerary button
btnsave.addEventListener("click", event =>{
    let itineraryObj = {};
    if (event.target.id === "btnSaveItinerary") {
        let HTMLSelector = document.querySelector("#choosePark");
        itineraryObj.parkId =  HTMLSelector.value;
        itineraryObj.parkName =  HTMLSelector.options[HTMLSelector.selectedIndex].innerText;
        HTMLSelector = document.querySelector("#chooseAttractions");
        itineraryObj.attractionId =  HTMLSelector.value;
        itineraryObj.attractionName =  HTMLSelector.options[HTMLSelector.selectedIndex].innerText;  
        HTMLSelector = document.querySelector("#chooseEatery");
        itineraryObj.eateryId =  HTMLSelector.value;
        itineraryObj.eateryName =  HTMLSelector.options[HTMLSelector.selectedIndex].innerText;      
        saveItin(itineraryObj);  
    }
})
// park dropdown
dropdownElement.addEventListener("change", event => {
    const parkSelector = event.target.value
    if (event.target.id === "choosePark") {
        console.log(`user wants to pick ${parkSelector}`)
        parkCard(parkSelector);
        btnsave.disabled = false;
    }
})
listItinerary.addEventListener("click", event =>{
    const e = new Event("change");
    loadSavedItinerary(event.target.innerText);
    
});
// attraction dropdown
//listening to the drop down
dropdownElement.addEventListener("change", event => {
    //pulls the id of what ever the user pulled out of the drop down
    if (event.target.id === "chooseAttractions") {
        //set attractionSelector to the value selected
        const attractionSelector = event.target.value
        console.log(`user wants to pick ${attractionSelector}`)
        //takes the value from attractionSelector and formats it into the attractionCard for HTML
        attractionCard(attractionSelector)
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
    






const tentativeItenerary = document.querySelector("body")


tentativeItenerary.addEventListener("click", event =>{
    console.log(event.target.id)
    if (event.target.id === "ParkDetails") {
        console.log("where is the modal")
        const modal = document.getElementById("natParksDetails")
        modal.style.display = "block";
    }
    if (event.target.id === "closeparkdets") {
        const modal = document.getElementById("natParksDetails")
        modal.style.display = "none";
    }
     if (event.target.id === "bizarreDetails") {
        console.log("where is the modal")
        const modal = document.getElementById("bizDetails")
        modal.style.display = "block";
    }
     if (event.target.id === "closebizdets") {
        const modal = document.getElementById("bizDetails")
        modal.style.display = "none";
    }
     if (event.target.id === "eateryDetails") {
        const modal = document.getElementById("eatsDetails")
        modal.style.display = "block";
    }
    if (event.target.id === "closeeatsdets") {
        const modal = document.getElementById("eatsDetails")
        modal.style.display = "none";
    }
} )

