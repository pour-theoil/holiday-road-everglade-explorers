import {getEateries, eateryArray} from "./eateryProvider.js"

export const entryEateryLoop = () => {
    const entryHTMLSelector = document.querySelector("#chooseEatery")
    var option = document.createElement("option");
        getEateries().then(param => {
            param.forEach((item,index) => {
                entryHTMLSelector.options[index+1] = new Option(item.businessName, item.id)
            })
    })
}

export const eateryCard = (eateryId) => {
    eateryArray.forEach(item => {
        if (item.id.toString() === eateryId) {
            const eateryHTML = `
            <h4>${item.businessName}</h4>
            <p>${item.description}</p>
            <p>${item.city}, ${item.state}</p>
            <div id="eatsDetails" class="modal">
            <!-- Modal content -->
                <div class="modal-content">
                    <ul><h3>Important Details</h3>
                        <li>Diaper Facility: ${item.ameneties.diaperFacility ? "Yes" : "No" }</li>
                        <li>Playground: ${item.ameneties.playground ? "Yes":"No"}</li>
                        <li>Restroom: ${item.ameneties.restrooms ? "Yes":"No"}</li>
                    </ul>
                    <span id="closeeatsdets" class="close">&times;</span>
                 </div>
    
            </div>
            <button id="eateryDetails" class="eateryDetails">Details</button>
            `
            document.querySelector(".eateryCard").innerHTML = eateryHTML
        }
    })
}