import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="container">
                <div className="logo">
                    <span className="text"> Servicios-app </span>
                </div>
                <div className="links">
                <span > New services </span>
                <span > Explore </span>
                <span > Schedule </span>
                <span > FAQ </span>
                <span > Log in </span>
                <button> Sign up </button>
                </div>

            </div>
                <hr/>
                <div className="menu">
                <span > New services </span>
                <span > Test </span>
                </div>
        </div>
    )
}

export default Navbar;