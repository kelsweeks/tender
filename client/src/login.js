import React from "react";
import {useHistory} from 'react-router-dom'
import {useState} from "react"

function Login({setIsAuthenticated}) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const[refresh, setRefresh] = useState(false)

    const history = useHistory()
    const [errors, setErrors] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/login`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
              if(res.ok){
                  res.json().then(user => {
                    setIsAuthenticated(true)
                      history.push(`/plants`)

                  })
              }else {
                  res.json().then(json => setErrors(json.errors))
              }
          })
      }
    
    return (
        <div>   
            <form onSubmit={onSubmit}>
                <input placeholder='username' onChange={(e) => setUserName(e.target.value)}></input>
                <input placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit'value='login'></input>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )
}
export default Login