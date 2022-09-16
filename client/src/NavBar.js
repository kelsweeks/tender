import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return (
        <div className="navbar">
            <ul>
                <li>
                <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                </li>
                <li>
                <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                </li>
                <li>
                <Link to="/plants" style={{ textDecoration: 'none' }}>plants</Link>
                </li>
                <li>
                <Link to ="/plant_tenders" style={{ textDecoration: 'none' }}>Plant Tenders</Link>    
                </li>
            </ul>
        </div>
    )
}

export default NavBar
