import React from "react"
import { useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

function SubmitForm() {
    const [username, setUserName] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState ([])
    const history = useHistory()

    const submitData = (e) => {
        e.preventDefault()
            const user = {
                name: name,
                username: username,
                email: email,
                password: password
            }
            
            fetch(`/users`,{
              method:'POST',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(user)
            })
               .then(res => {
                if(res.ok){
                    res.json().then(user => {
                        history.push(`/home`)
                    })
                }else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
           
        }
     
    console.log('hello')
    return (
        <div>
        <h1>Create Profile</h1>
        <form onSubmit={submitData}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)}></input> 
        <input placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type='submit' value='Sign Up'></input>
        </form>
        </div>
    )
}

export default SubmitForm