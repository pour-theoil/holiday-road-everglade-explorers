let weatherCollection = [];

export const getWeather = (lat, lon ,api) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${api}`)
    .then( response => response.json())
    .then( parsedResponse => {
        weatherCollection = parsedResponse.daily
        return weatherCollection;
    }) 
}
