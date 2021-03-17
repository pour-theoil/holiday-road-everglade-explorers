import {useParks, getParks} from "./ParkProvider.js"
import {settings} from "../Settings.js"


export const entryParksLoop = () => {
    getParks(settings.npsKey).then(()=>{
        let parkArray = [];
        const park = useParks()
        park.forEach((item) => {
            if (item.states === "NC" || item.states === "TN" || item.states === "VA") {
                parkArray.push(item);
            }
            })
            const entryHTMLSelector = document.querySelector("#choosePark")
            parkArray.forEach((item,index) => {
                entryHTMLSelector.options[index+1] = new Option(item.name, item.id)
            })
    })
}