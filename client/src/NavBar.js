import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return (
        <div className="navcontainer">
            <ul>
                <li className="navitem">
                <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                </li>
                <li className="navitem">
                <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                </li>
                <li className="navitem">
                <Link to="/plants" style={{ textDecoration: 'none' }}>Plants</Link>
                </li>
                <li className="navitem">
                <Link to ="/plant_tenders" style={{ textDecoration: 'none' }}>Plant Tenders</Link>    
                </li>
            </ul>
        </div>
    )
}

export default NavBar
