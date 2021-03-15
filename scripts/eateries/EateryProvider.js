export const getEateries = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=ZQJdiGzoicWSruvzaWpcJ1QRYzasczeinuyJ9od5")
    .then(response => response.json())
}