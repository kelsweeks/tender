import React from "react";
// import PlantIcon from './images/plant-icon.png'

function PlantTenderCard({plantTender}){
    
    
    
console.log(plantTender)
    return (
        <div>
        {/* <img src={PlantIcon}></img> */}
        <ol>{plantTender.name}</ol>
        <li>{plantTender.phone}</li>
        </div>
    )
}
export default PlantTenderCard