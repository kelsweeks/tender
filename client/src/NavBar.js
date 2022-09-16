import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return (
        <div>
            <h1>Tenders</h1>
            <ul className="navbar">
                <li>
                <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/plants">plants</Link>
                </li>
                <li>
                <Link to ="/plant_tenders">Plant Tenders</Link>    
                </li>
            </ul>
        </div>
    )
}

export default NavBar
