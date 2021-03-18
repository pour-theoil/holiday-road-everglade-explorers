export const  saveItin = (itineraryObj) =>{
    
    let modal = document.getElementById("saveItineraryModal");
    let span = document.getElementsByClassName("saveItineraryClose")[0];
    let para = document.querySelector(".saveItinerary-p");
    let btn = document.querySelector("#saveItinerary-btn");
    let input = document.querySelector("#saveItinerary-input");
    para.innerHTML = `Park: ${itineraryObj.parkName} , Attraction: ${itineraryObj.attractionName} , Eatery: ${itineraryObj.eateryName}`;
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    span.onclick = function() {
        modal.style.display = "none";
      }
      btn.addEventListener("click", event =>{
        if (input.value.length > 0){
            itineraryObj.itineraryName = input.value;
            postItinerary(itineraryObj)
            .then(response => response.json())
            .then(parsedData => {parkArray = parsedData.data
                para.innerHTML = "Itinerary saved!!"
                setTimeout(modal.style.display = "none", 500);
            });
        }else {
            alert("enter am Itinerary Name");
            input.focus();
        };
        
      });
    }
      const postItinerary = (postObj) =>{
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
      
      }