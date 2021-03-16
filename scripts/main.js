import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"

import {getAttractions} from "./attractions/AttractionProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"
import {entryLoopLog} from "./attractions/ListManager.js"
import {entryEateryLoop} from "./eateries/ListManager.js"
import {entryParksLoop} from "./parks/ListManager.js"


entryLoopLog()
entryEateryLoop()
// entryParksLoop()
// getParks(settings.npsKey)


const fiveday = () => {
    getWeather("37.58", "-85.67", settings.weatherKey)
    .then(dailyweather => {
        return getForcast(dailyweather);
    });
} 

    

