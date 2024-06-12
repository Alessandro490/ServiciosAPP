import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";

const Home = () => {
    return (
        <div className="home"> 
            <Featured/>
            <Slide/>
        </div>
    )
}

export default Home;