import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard"; 
import ProjectCard from "../../components/projectCard/ProjectCard";
import {cards, projects} from "../../data";

const Home = () => {
    return (
        <div className="home"> 
            <Featured/>
            <Slide>
                {cards.map(card => (
                    <CatCard item={card} key={card.id}/>
                ))}        
            </Slide>    
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>Los trabajadores independientes son el nuevo mercado</h1> 
                        <div className="title">
                            Con el mejor presupuesto       
                        </div> 
                        <div className="title">
                            Una nueva manera de trabajar
                        </div>

                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>Negocios Servicios SV</h1> 
                        <h1> Un nuevo modelo de negocio para trabajadores </h1>
                        <p>
                            Experimenta una nueva manera de trabajar con Servicios SV
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Presupuesto flexible   
                        </div> 
                        <div className="title">
                        <img src="./img/check.png" alt="" />
                            Contacta nuevos trabajadores   
                        </div> 
                        <div className="title">
                        <img src="./img/check.png" alt="" />
                            Emparejate con nuevos talentos
                        </div> 
                    </div>
                </div>
            </div>
            <Slide dots slidesToShow={4} arrowsScroll={4}>
                {projects.map((card) => (
                <ProjectCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    )
}

export default Home;