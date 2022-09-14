import React from "react";
import {useEffect,useState} from "react"
import PlantCard from "./PlantCard";

function Plant() {
    
    const[plants, setPlants] = useState ([])
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        fetch('/plants')
        .then(res => {
          if(res.ok){
            res.json().then(setPlants)
          }else {
            res.json().then(data => setErrors(data.error))
          }
        })
      },[])
    
    return (
        <div>
          {plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
        </div>
        
    )
}
export default Plant