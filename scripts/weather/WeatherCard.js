const tempConvert = (tempK) => {
    let temp = (((tempK-270)*9/5) +32).toFixed(0)
    return temp
}

const timeconverter = (time) => {
    var myDate = new Date(time *1000)
    let shortend = myDate.toLocaleDateString()
    return shortend;
}

export const weatherCard = (daily) => {
    let x = `
    <div class="dailyweather">
        <h3> ${timeconverter(daily.dt)} </h3>
        <p> High: ${tempConvert(daily.temp.max)}\xB0 Low: ${tempConvert(daily.temp.min)}\xB0</p>
        <p> Conditions: ${daily.weather[0].description} </p>
    </div>
    `
    return x;
}