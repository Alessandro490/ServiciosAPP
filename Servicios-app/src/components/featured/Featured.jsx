import React from "react";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured">
           <div className="container">
               <div className="left">
               <h1>Encuentra los mejores trabajadores independientes que andabas buscando</h1>
                    <div className="search">
                       <div className="searchInput">
                           <img src="./img/Search.png" alt="Imagen de busqueda"  className="Lupa"/>
                           <input type="text" placeholder='Desarrollar una app móvil ' />
                       </div>
                       <button>Buscar</button>
                    </div>
                    <div className="popular">
                        <span>Popular: </span>
                        <button>Diseño web</button>
                        <button>Minería de datos</button>
                        <button>Desarrollador Android</button>
                        <button>Full stack</button>
                        <button>Analista de datos</button>
                    </div>
                </div>
                <div className="right">
                        <img src="./img/BussinessWoman.jpg" alt="Imagen de un trabajador" />               
                </div>
           </div> 
        </div>
            
    )
}

export default Featured;