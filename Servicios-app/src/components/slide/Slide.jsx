import React from "react";
import "./Slide.css";
import  Slider  from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import {cards} from "../../data";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
      <div className="slide">
        <div className="container">
          <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    );
  };    

/*const Slide = () => {
return (
    <div className="slide">
        <div className="container">
        <Slider dots slidesToShow={5} arrowsScrol={5}>
            {cards.map(card => (
                <CatCard item={card} key={card.id}/>
            ))}
        </Slider>
        </div>
    </div>
)
}*/

export default Slide;