
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
            <!-- Modal content -->
                <div class="modal-content">
                    <p>${item.description}</p>
                    <span id="closeAttractionDets" class="close">&times;</span>
                 </div>
    
            </div>
            `
            document.querySelector(".bizarreCard").innerHTML = attractionHTML
        }
    });
}