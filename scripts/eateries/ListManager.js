
import {getEateries} from "./eateryProvider.js"


export const entryEateryLoop = () => {
    const entryHTMLSelector = document.querySelector("#chooseEatery")
    var option = document.createElement("option");
        getEateries().then(param => {
            param.forEach((item,index) => {
                entryHTMLSelector.options[index] = new Option(item.businessName, item.id)
            })
    })
}



// const selectBrickMaterial = document.getElementById('brickMaterial');
// 		selectList.forEach((item, index) =>{
// 			selectBrickMaterial.options[index] = new Option(item, item);
// 		})

// var x = document.getElementById("mySelect");
// var option = document.createElement("option");
// option.text = "Kiwi";
// x.add(option);