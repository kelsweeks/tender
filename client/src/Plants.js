import React from "react";
import {useEffect,useState} from "react"
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";

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
            <PlantForm />
          {plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
        </div>
        
    )
}
export default Plant