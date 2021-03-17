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
            `
            document.querySelector(".eateryCard").innerHTML = eateryHTML
        }
    })
}