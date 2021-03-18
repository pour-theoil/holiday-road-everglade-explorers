import { currentWeather } from "../parks/ListManager.js"

export const weatherModal = () => {
    const weatherhtml =`
    <div id="weatherForcast" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <p>${currentWeather}</p>
            <span id="closeweather">&times;</span>
        </div>
    </div>`
    document.querySelector(".modspot").innerHTML = weatherhtml;
}
