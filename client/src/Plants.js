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

      const FreshPlant = (FreshPlant) => {
        console.log("hello")
        setPlants(plants => [FreshPlant, ...plants])
      } 


    
    return (
        
        <div>
          {/* <PlantCard /> */}
          <PlantForm FreshPlant = {FreshPlant}/>
          {plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
        </div>
        
    )
}
export default Plant