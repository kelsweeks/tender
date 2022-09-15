import React from "react";
import { Route, Switch } from 'react-router';
import SubmitForm from "./SubmitForm" 
import Login from "./login";


function LoggedOut() {
    return (
        <div>
             <h1> Please signup or login if you have an Account</h1>
            
            <Switch>
                <Route path={'/signup'}>  
                    <SubmitForm/>
                </Route>
                <Route path={"/login"}>
                    <Login />
                </Route>  
                

            </Switch>
        </div>
    )
}
export default LoggedOut