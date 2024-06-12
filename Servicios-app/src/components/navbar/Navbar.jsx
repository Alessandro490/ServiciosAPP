import React, { useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false)

    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
        window.removeEventListener("scroll", isActive);
    };

    },[]);

    const currentUser= {
        id: 1,
        username: " Diego",
        isWorker: true,

    }

    return (
        <div className={active || pathname !=="/" ? "navbar active": "navbar"}> 
            <div className="container">
                <div className="logo">
                     <Link to="/" className="link"> 
                    <span className="text"> Servicios-app </span>
                     </Link> 
                </div>
                <div className="links">
                <span > New services </span>
                <span > Explore </span>
                <span > Schedule </span>
                <span > Log in </span>
                {!currentUser?.isWorker && <span > Become a worker </span>}
                {currentUser && <button> Sign up </button>}
                {currentUser &&(
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/33/33332.png" alt="Logo de la imagen"/>
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isWorker &&(
                                    <>
                                    <Link className="link" to="/mygigs"> Gigs </Link>
                                    <Link className="link" to="/add"> Add new Gigs </Link>
                                    </>
                            )}
                            <Link className="link" to="/orders">Orders</Link>
                            <Link className="link" to="/messages">Messages</Link>
                            <Link className="link" to="/">Logout</Link>
                        </div>}
                    </div>
                )}
                </div>

            </div>
            {(active || pathname !=="/") &&(
                <>
                <hr/>
                <div className="menu">
                <Link className="link menuLink" to="/">
                Graphic and Design
                </Link>
                <Link className="link" to="/">
                Technology
                </Link>
                <Link className="link" to="/">
                Video and animation
                </Link>
                <Link className="link" to="/">
                Bussiness
                </Link>
                <Link className="link" to="/">
                Music
                </Link>
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar;