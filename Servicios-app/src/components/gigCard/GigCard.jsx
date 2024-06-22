import React from "react";
import {Link} from "react-router-dom";
import "./GigCard.css";

const GigCard = ({item}) => {
    return(
        <Link to="/gig/123">
            <div className="gigCard">
                <img src={item.img} alt="" />
                    <div className="info">
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default GigCard;