import React from "react";

function PlantTenderCard({plantTender}){
    
    
    
console.log(plantTender)
    return (
        <div>
        <ol>{plantTender.name}</ol>
        <li>{plantTender.phone}</li>
        </div>
    )
}
export default PlantTenderCard