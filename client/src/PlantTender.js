import React from "react";
import { useState, useEffect } from "react";
import PlantTenderCard from "./PlantTenderCard";


function PlantTender(){
    
    const [plantTenders, setPlantTenders] = useState([])
    const [errors, setErrors] = useState(false)
  
  
    useEffect(() => {
      fetch('/plant_tenders')
      .then(res => {
        if(res.ok){
          res.json().then(setPlantTenders)
        }else {
          res.json().then(data => setErrors(data.error))
        }
      })
    },[])
    
    return (
        <div> 
             {plantTenders.map(plantTender => <PlantTenderCard key={plantTender.id} plantTender={plantTender}/>)}
        </div>
    )
}
export default PlantTender