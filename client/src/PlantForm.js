import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom"

function PlantForm({FreshPlant}) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [plant_type, setPlantType] = useState('')
    const [care,setCare] = useState('')
    const [errors, SetErrors] = useState([])
    const history = useHistory()
    
    console.log(FreshPlant)
    const submitData = (e) => {
        e.preventDefault()
            const plant = {
                name: name,
                location: location,
                plant_type: plant_type,
                care: care
            }

            fetch(`/plants`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(plant)
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(newplant => {
                        FreshPlant(newplant)
                        history.push(`/home`)
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
        <input type='submit' value='Create A Plant'></input>
        </form>
        </div>
    )   
}
export default PlantForm