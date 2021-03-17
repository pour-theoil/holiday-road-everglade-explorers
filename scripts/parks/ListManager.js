import { useParks, getParks } from "./ParkProvider.js"
import { settings } from "../Settings.js"

export let parkArray = [];

export const entryParksLoop = () => {
    getParks(settings.npsKey).then(() => {
        const park = useParks()
        park.forEach((item) => {
            if (item.states === "NC" || item.states === "TN" || item.states === "VA") {
                parkArray.push(item);
            }
        })
        const entryHTMLSelector = document.querySelector("#choosePark")
        parkArray.forEach((item, index) => {
            entryHTMLSelector.options[index + 1] = new Option(item.name, item.id)
        })
    })
}

export const parkCard = (parkId) => {
    parkArray.forEach(item => {
        if (item.id === parkId) {
            const parkHTML = `
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p>${item.addresses[0].city}, ${item.addresses[0].stateCode}</p>
            <div id="natParksDetails" class="modal">
            <!-- Modal content -->
                <div class="modal-content">
                    <p>${item.description}</p>
                    <span id="closeparkdets" class="close">&times;</span>
                 </div>
    
            </div>
            `
            document.querySelector(".parkCard").innerHTML = parkHTML
        }
    });
}