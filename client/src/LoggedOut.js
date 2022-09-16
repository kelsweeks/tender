import React from "react";
import { Route, Switch } from 'react-router';
import SubmitForm from "./SubmitForm" 
import Login from "./login";


function LoggedOut({setIsAuthenticated}) {

    return (
        <div>
             <h1> Please signup or login if you have an Account</h1>
            
                <Route path='/signup'>  
                    <SubmitForm setIsAuthenticated={setIsAuthenticated}/>
                </Route>
                <Route path="/login">
                    <Login setIsAuthenticated={setIsAuthenticated}/>
                </Route>  
    
        </div>
    )
}
export default LoggedOut