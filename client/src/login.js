import React from "react";
import {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function Login() {
    
    const [username, setUserName] = useState('')
    const [password_digest, setPassword_digest] = useState('')
    const [error, setErrors] = useState([])


    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password_digest
        }

        fetch(`/users`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
                  history.push(`/users/${user.id}`)
              })
          }else {
              res.json().then(json => setErrors(Object.entries(json.errors)))
          }
      })
    
    
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='username' onChange={(e)=> {setUserName(e.target.value)}}></input>
                <input placeholder='password' onChange={(e)=> {setPassword_digest(e.target.value)}}></input>
                <input type='submit'value='login'></input>
            </form>
        </div>
    )
}
export default Login