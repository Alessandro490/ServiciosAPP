import React, { Children } from "react";
import "./Slide.css";
import Slider from 'infinite-react-carousel';
import catCard from "../catCard/catCard";
import {cards} from "../../data";

const Slide = () => {    
    return(
        <div className="slide">
            <Slider dots>
                {cards.map((item) => (
                    <catCard item={item} key={item.id}/>
                ))}
            </Slider>
        </div>
    )
}

export default Slide;