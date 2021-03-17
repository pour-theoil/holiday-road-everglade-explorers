import { parkArray } from "./parks/ListManager.js"

export const parkPreview = (object) => {
    parkArray.forEach(item => {
        if (item.id === object) {
            return `
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p>${item.addresses[0].city}, ${item.addresses[0].stateCode}</p>
            `
        }
    });
    }