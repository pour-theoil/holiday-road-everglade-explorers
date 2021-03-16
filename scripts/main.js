import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { getForcast } from "./weather/WeatherList.js";
import { settings } from "./Settings.js"


const fiveday = () => {
    getWeather("37.58", "-85.67", settings.weatherKey)
    .then(dailyweather => {
        return getForcast(dailyweather);
    });
} 

    
