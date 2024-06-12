import React from "react";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured">
           <div className="container">
               <div className="left">
               <h1>Find the freelance service you were looking for</h1>
                    <div className="search">
                       <div className="searchInput">
                           <img src="./img/Search.png" alt="Imagen de busqueda"  className="Lupa"/>
                           <input type="text" placeholder='Try "building mobil app" ' />
                       </div>
                       <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular: </span>
                        <button>Web Design</button>
                        <button>Data mining</button>
                        <button>Android developer</button>
                        <button>Full stack</button>
                        <button>Data analyst</button>
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