import React from "react";
import { Route, Switch } from 'react-router';
import Plants from './Plants';
import PlantTender from './PlantTender';
import NavBar from "./NavBar";

function LoggedIn({Logout}) {


    return (
        <div>
        <NavBar />
        <Switch>
            <Route strict path={"/plants"}>
                <Plants />
            </Route>

            <Route path={"/Plant_Tenders"}>
                <PlantTender />
            </Route>
      </Switch>
        </div>
    )
}
export default LoggedIn