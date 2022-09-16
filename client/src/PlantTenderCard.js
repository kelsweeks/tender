import React from "react";

function PlantTenderCard({plantTender}){
    
    
    

    return (
        <div className="tendercard">
        <ol>{plantTender.name}</ol>
        <li>{plantTender.phone}</li>
        </div>
    )
}
export default PlantTenderCard