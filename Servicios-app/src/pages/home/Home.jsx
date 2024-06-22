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
                        <h1>Freelance worker is a new world</h1> 
                        <div className="title">
                            The best budget ever    
                            
                        </div> 
                    </div>
                    <div className="item">
                        Video a poner a la derecha
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>Servicios SV bussines</h1> 
                        <h1> A new business model designed for workers </h1>
                        <p>
                            Find an experiencie new way to work and get paid
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best budget ever    
                        </div> 
                        <div className="title">
                        <img src="./img/check.png" alt="" />
                            Connect with the new workers   
                        </div> 
                        <div className="title">
                        <img src="./img/check.png" alt="" />
                            Get matched with perfect new talent
                        </div> 
                    </div>
                    <div className="item">
                        Video a poner a la derecha
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