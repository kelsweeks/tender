import React from "react";
import { Route, Switch } from 'react-router';
import Plants from './Plants';
import PlantTender from './PlantTender';
import NavBar from "./NavBar";


function LoggedIn({logout}) {


    return (
        <div>
        <NavBar />
        <Switch>
            <Route strict path="/plants">
                <Plants />
            </Route>
            <Route path="/Plant_Tenders">
                <PlantTender />
            </Route>
        </Switch>
        <button onClick={logout}>log out!</button>
        </div>
    )
}
export default LoggedIn