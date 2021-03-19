import { useParks, getParks } from "./ParkProvider.js"
import { settings } from "../Settings.js"
import { getWeather } from "../weather/WeatherProvider.js"
import { getForcast } from "../weather/WeatherList.js"

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

export let currentWeather = []
let img1 = {};
let img2 = {};
 let addDetail ='';
export const parkCard = (parkId) => {
    parkArray.forEach(item => {
        if (item.id === parkId) {
            getWeather(item.latitude, item.longitude, settings.weatherKey)
                .then(dailyweather => {
                    currentWeather = getForcast(dailyweather)
                }).then(() => {
                    const parkHTML = `
            .then(dailyweather => {
                currentWeather = getForcast(dailyweather)
            }).then(()=>{   
                img1 = getimg(1,item);
                img2 = getimg(2,item);
                addDetail = (item.operatingHours[0].description != undefined) ? item.operatingHours[0].description: "Hours not available";
                }).then(()=>{   
            const parkHTML = `
            <div class="weatherFormat">
            <div class="headingButton">
            <div class="headingFlex">
            <h3>${item.name}</h3>

            <p>${item.addresses[0].city}, ${item.addresses[0].stateCode}</p>
            </div>
            <button id="ParkDetails" class="parkDetails">Details</button>
            </div>
            <div class="weatherMiniCards">
            <p>${currentWeather}</p>
            </div>
            </div>
            <div id="natParksDetails" class="modal">
            <!-- Modal content -->
                <div class="modal-content">
                <img src="${img1.img}" alt=${img1.altTxt} width="20%" height="15%"> 
                    <div>
                        <p>${item.description}</p>
                    </div>   
                    <div>
                    <p>${addDetail}</p>
                </div>  
                    <img src="${img2.img}" alt=${img2.altTxt} width="20%" height="15%">
                    <span id="closeparkdets" class="close">&times;</span>
                 </div>

            </div>
            `
                    document.querySelector(".parkCard").innerHTML = parkHTML;
                })
        }
    });
}

const getimg = (nbr, item) => {
    let retImg = {};
    if (nbr === 1) {
        retImg.img = (item.images[0].url != undefined) ? item.images[0].url : "../../Images/stockimg1.jpeg";
        retImg.altTxt = (item.images[0].url != undefined) ? item.images[0].title : "National park image";
        return retImg;
    }
    else {
        retImg.img = (item.images[1].url != undefined) ? item.images[1].url : "../../Images/stockimg2.jpeg";
        retImg.altTxt = (item.images[1].url != undefined) ? item.images[1].title : "National park image";
        return retImg;
    }
}