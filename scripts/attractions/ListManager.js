
import { getAttractions, attractionArray } from "./AttractionProvider.js"



export const entryLoopLog = () => {
    const entryHTMLSelector = document.querySelector("#chooseAttractions")
    var option = document.createElement("option");
    let entryListHolder = ""
        getAttractions().then(param => {
            param.forEach((item,index) => {
                entryHTMLSelector.options[index+1] = new Option(item.name, item.id)
            })
    })
}

export const attractionCard = (attractionId) => {
    attractionArray.forEach(item => {
        if (item.id.toString() === attractionId) {
            const attractionHTML = `
            <h3>${item.name}</h3>
            <p>${item.city}, ${item.state}</p>

            <p class="para">${item.description}</p>
            <div id="natParksDetails" class="modal">
            <div id="bizDetails" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <ul><h3>Important Details</h3>
                    <li>Diaper Facility: ${item.ameneties.diaperFacility ? "Yes" : "No" }</li>
                    <li>Playground: ${item.ameneties.playground ? "Yes":"No"}</li>
                    <li>Restroom: ${item.ameneties.restrooms ? "Yes":"No"}</li>
                </ul>
                <span id="closebizdets" class="close">&times;</span>
             </div>

            </div>
            <button id="bizarreDetails" class="bizarreDetails">Details</button>
            `
            document.querySelector(".bizarreCard").innerHTML = attractionHTML
        }
    });
}