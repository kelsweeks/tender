import React from "react";

function PlantCard({plant}){

    console.log(plant)
    return(
        <div>
            
          <ol>
            <li>{plant.name}</li>
            <li>Owner: {plant.user.name}</li>
            <li>{plant.location}</li>
            <li>{plant.plant_type}</li>
            <li>{plant.care}</li>

          </ol>

        </div>
    )
}
export default PlantCard