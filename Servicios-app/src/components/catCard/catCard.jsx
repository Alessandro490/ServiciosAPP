import React from "react";
import "./catCard.css";

const CatCard = ({item}) => {
    return(
        <Link to="/gigs?cat=design">
        <div className="catCard">
           <img src={item.img} alt="imagen"/>
           <span className="desc">{item.desc}</span>
           <span className="title">{item.titel}</span>
        </div>
        </Link>
    )
}

export default CatCard;