import React from "react";
import {useState} from "react"
import {useHistory} from "react-router-dom"

function PlantForm({newPlant}) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [plant_type, setPlantType] = useState('')
    const [care,setCare] = useState('')
    const[owner, setOwner] = useState('')
    const [errors, SetErrors] = useState([])
    const history = useHistory()
    
    
    const submitData = (e) => {
        e.preventDefault()
            const plant = {
                name: name,
                location: location,
                plant_type: plant_type,
                care: care,
                user_id:owner
            }
            fetch(`/plants`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(plant)
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(newplant => {
                        newPlant(newplant)
                        e.target.reset()
                    })
                }else {
                    res.json().then(json => SetErrors(Object.entries(json.errors)))
                }
            })
    }
    return (
        <div>
            <form onSubmit={submitData}>
                <h1>Create A Plant</h1>
                <input placeholder="Name" onChange={(e) => setName(e.target.value)}></input> 
                <input placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
                <input placeholder="Plant Type" onChange={(e) => setPlantType(e.target.value)}></input>
                <input placeholder="Care" onChange={(e) => setCare(e.target.value)}></input>
                <input placeholder="Owner" onChange={(e) => setOwner(e.target.value)}></input>
                <input type='submit' value='Create A Plant'></input>
            </form>
        </div>
    )
}
export default PlantForm