
import {getAttractions} from "./AttractionProvider.js"


export const entryLoopLog = () => {
    const entryHTMLSelector = document.querySelector("#chooseAttractions")
    var option = document.createElement("option");
    let entryListHolder = ""
        getAttractions().then(param => {
            param.forEach((item,index) => {
                entryHTMLSelector.options[index] = new Option(item.name, item.id)
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