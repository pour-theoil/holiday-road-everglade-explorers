export const getParks = (api) => {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api}&limit=500`)
    .then(function (result) {
        return result.json();
    }).then(function (data) {
        let parkArray = []
        let records = data.data;
        records.forEach((item) => {
            if (item.states === "NC" || item.states === "TN" || item.states === "VA") {
                parkArray.push(item);
            }
            })
            console.log(parkArray)
            return parkArray;
    });
}
