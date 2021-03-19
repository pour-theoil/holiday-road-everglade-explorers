import {savedCard} from "./savedItinerary.js";
import {parkArray,parkCard} from "../parks/ListManager.js";
import{attractionCard} from "../attractions/ListManager.js"
import {attractionArray} from "../attractions/AttractionProvider.js"
import{eateryCard} from "../eateries/ListManager.js"
import {getEateries, eateryArray} from "../eateries/eateryProvider.js"
export let savedItinerary = [];

export const  saveItin = (itineraryObj) =>{
    let modal = document.getElementById("saveItineraryModal");
    let span = document.getElementsByClassName("saveItineraryClose")[0];
    let para = document.querySelector(".saveItinerary-p");
    let btn = document.querySelector("#saveItinerary-btn");
    let input = document.querySelector("#saveItinerary-input");
    para.innerHTML = `Park: ${itineraryObj.parkName} , Attraction: ${itineraryObj.attractionName} , Eatery: ${itineraryObj.eateryName}`;
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    span.onclick = function() {
        modal.style.display = "none";
      }
    btn.addEventListener("click", event =>{
        if (input.value.length > 0){
            para.innerHTML = "Saving itinerary"  
            itineraryObj.itineraryName = input.value;
            postItinerary(itineraryObj)
            .then(data => {
              alert(`The itinerary : ${data.itineraryName} was saved`)
              modal.style.display = "none"
              getSavedItinerary()
          })
        }else {
            alert("enter an Itinerary Name");
            input.focus();
        };
        
      });
    }
    export const loadSavedItinerary = (name) =>{
      
      savedItinerary.forEach((item) => {
        if(name === item.itineraryName){
          let element = document.getElementById("choosePark");
          parkArray.forEach((park) => {
              if(item.parkId === park.id){
                for ( var i = 0; i < element.options.length; i++ ) {
                  if ( element.options[i].value == item.parkId ) {
                    element.options[i].selected = true;
                    parkCard(element.options[i].value);
                  }
              }
            }
          })
          element = document.getElementById("chooseAttractions");
          attractionArray.forEach((att) => {
            if(Number(item.attractionId) === att.id){
              for ( var i = 0; i < element.options.length; i++ ) {
                if ( element.options[i].value == Number(item.attractionId)) {
                  element.options[i].selected = true;
                  attractionCard(element.options[i].value);
                }
            }
          }
        })
        element = document.getElementById("chooseEatery");
        eateryArray.forEach((eat) => {
          if(Number(item.eateryId) === eat.id){
            for ( var i = 0; i < element.options.length; i++ ) {
              if ( element.options[i].value == Number(item.eateryId)) {
                element.options[i].selected = true;
                eateryCard(item.eateryId);
              }
          }
        }
      })

        }
     })
    }
    export const getSavedItinerary =() =>{
      const savedHTML = document.querySelector("#ul-savedItinerary");
      let HTMLAdd = "";
      return fetch("http://localhost:8088/itineraries")
      .then(response => response.json())
      .then(function (data) {
          data.forEach((item) => {
            savedItinerary.push(item);
            HTMLAdd += savedCard(item.itineraryName);
              })
              savedHTML.innerHTML = HTMLAdd;
      });
    }
      const postItinerary = (postObj) =>{
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
        .then(response => response.json())
      }
