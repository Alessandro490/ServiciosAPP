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
                    <span className="text"> Servicios SV </span>
                     </Link> 
                </div>
                <div className="links">
                <Link to="/gigs" className="link">   
                <span > Nuevos servicios </span>
                </Link>
                <Link to="/gigs" className="link"> 
                    <span className="text"> Explora </span>
                     </Link> 
                <span > Iniciar sesión </span>
                {!currentUser?.isWorker && <span > Become a worker </span>}
                {currentUser && <button> Registrate </button>}
                {currentUser &&(
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/33/33332.png" alt="Logo de la imagen"/>
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isWorker &&(
                                    <>
                                    <Link className="link" to="/mygigs"> Trabajos </Link>
                                    <Link className="link" to="/add"> Agregar trabajo </Link>
                                    </>
                            )}
                            <Link className="link" to="/orders">Ordenes</Link>
                            <Link className="link" to="/messages">Mensajes</Link>
                            <Link className="link" to="/">Cerrar sesión</Link>
                        </div>}
                    </div>
                )}
                </div>

            </div>
            {(active || pathname !=="/") &&(
                <>
                <hr/>
                <div className="menu">
                <Link className="link menuLink" to="/gigs">
                Diseño
                </Link>
                <Link className="link" to="/">
                Tecnología
                </Link>
                <Link className="link" to="/">
                Video y animación
                </Link>
                <Link className="link" to="/">
                Negocios
                </Link>
                <Link className="link" to="/">
                Música
                </Link>
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar;