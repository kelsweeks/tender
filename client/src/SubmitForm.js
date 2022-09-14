import React from "react"
import { useState, useEffect} from "react"

function SubmitForm() {
    const [username, setUserName] = useState('')
    const [name, setName] = useState('')
    const [password_digest, setPassword_digest] = useState('')
    const [email, setEmail] = useState('')

    const submitData = (e) => {
        e.preventDefault()

        // fetch('/users', {
        //     method: "POST",
        //     headers: {
        //         'Content-type':'application/json',
        //     },
        //     body: JSON.stringify ({
        //         username,
        //         name,
        //         password_digest,
        //         email
        //     })
        //     .then(resp => {
        //         if (resp.ok){
        //             resp.json()
      
//     fetch(`/users`,{
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(user)
//       })
//       .then(res => {
//           if(res.ok){
//               res.json().then(user => {
//                   updateUser(user)
//                   history.push(`/users/${user.id}`)
//               })
//           }else {
//               res.json().then(json => setErrors(Object.entries(json.errors)))
//           }
//       })
     
      }

 
    return (
        <div>
        <h1>Create Profile</h1>
        <form className="form" onSubmit={null}/>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)}></input> 
        <input placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
        <input placeholder="Password" onChange={(e) => setPassword_digest(e.target.value)}></input>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type='submit' value='Sign Up'></input>
        </div>
    )
}

export default SubmitForm