import React from "react";
import { useHistory } from "react-router-dom";
import {useState} from "react"



function PlantCard({plant, deletePlant,updatePlant}){

    const [errors, setErrors] = useState('')
    const [showButton, setShowButton] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [plant_type, setPlantType] = useState('')
    const [care,setCare] = useState('')
    const[owner, setOwner] = useState('')
    const [updateErrors, setUpdateErrors] = useState('')
   
   
    const history = useHistory()  
    
    const toggleButton = () => {
        setShowButton(!showButton)
    } 

    function handleDelete(){
        fetch(`/plants/${plant.id}`,{
          method:'DELETE'
        })
        .then(res => {
          if(res.ok){
            deletePlant(plant.id)
          } else {
            res.json().then(data => setErrors(data.errors))
          }
        })
      }
      
      const handlePlantUpdate = (e) => {
            e.preventDefault()
            
            const plantInfo = {
                name: name,
                location:location,
                plant_type: plant_type,
                care: care,
                owner: owner
            }
            fetch(`/plants/${plant.id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(plantInfo)
            })
            .then(res => {
            if(res.ok){
                res.json().then(updatePlant)
                e.target.reset()
            } else {
                //Display errors
                res.json().then(data => setUpdateErrors((data.errors)))
            }
            })
        }

      const plantData = (e) => {
        console.log(e.target)
      }
    return(
        <div>
            
          <ol>
            <li>{plant.name}</li>
            <li>Owner: {plant.user.name}</li>
            <li>{plant.location}</li>
            <li>{plant.plant_type}</li>
            <li>{plant.care}</li>
            <button onClick={handleDelete} >delete Plant</button>
            <button onClick={toggleButton} >Update Plant</button>
            {showButton ?                           
            <form onSubmit={handlePlantUpdate}>
                <h1>Update A Plant</h1>
                <input placeholder="Name" onChange={(e) => setName(e.target.value)}></input> 
                <input placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
                <input placeholder="Plant Type" onChange={(e) => setPlantType(e.target.value)}></input>
                <input placeholder="Care" onChange={(e) => setCare(e.target.value)}></input>
                <input placeholder="Owner" onChange={(e) => setOwner(e.target.value)}></input>
                <input type='submit' value='Update'></input>
            </form>
            : null}
          </ol>

        </div>
    )
}
export default PlantCard