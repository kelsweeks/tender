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
      
    //    
    const deletePlant = (id) => setPlants(plants.filter(p => p.id !== id))
      //console.log(plants.filter(p => p.id !== id))
      const newPlant = (FreshPlant) => {
        setPlants(plants => [FreshPlant, ...plants])
      }
    
      const updatePlant = (updatedPlant) => setPlants(plantobj => {
        return plantobj.map(plant => {
         if(plant.id === updatedPlant.id){
           return updatedPlant
         } else {
           return plant
         }
        })
      })
    

    return (
        <div>
            <PlantForm newPlant={newPlant} />
          {plants.map(plant => <PlantCard key={plant.id} plant={plant} deletePlant={ deletePlant } updatePlant={updatePlant}/>)}
        </div>
        
    )
}
export default Plant