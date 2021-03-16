import { weatherCard } from "./WeatherCard.js";

export const getForcast = (allWeather) => {
    let weatherHTML = "";
    for (let i= 0; i<5; i++) {
            weatherHTML += weatherCard(allWeather[i])
    }
    console.log(weatherHTML)
    return weatherHTML;
}