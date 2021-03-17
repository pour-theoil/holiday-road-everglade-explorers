let parkArray = []

export const getParks = (api) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api}&limit=500`)
    .then(response => response.json())
    .then(parsedData => {parkArray = parsedData.data})
}
export const useParks = () => {
    return [...parkArray]
}