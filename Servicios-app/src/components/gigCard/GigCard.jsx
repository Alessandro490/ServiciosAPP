import React from "react";
import {Link} from "react-router-dom";
import "./GigCard.css";
import noPhotoIcon from "../../../src/img/no-photo.jpg";

const GigCard = ({ item }) => {
  const imageUrl = item.foto_servicio ? `data:image/jpeg;base64,${item.foto_servicio}` : noPhotoIcon;
    return(
      <Link to={`/gig/${item.servicio_id}`} className="link">
        <div className="gigCard">
          <img src={imageUrl} alt="" />
          <div className="info">
            <div className="user">
              <img src={item.pp} alt="" />
              <span>{item.nombre_servicio}</span>
            </div>
            <p>{item.descripcion_servicio}</p>
            <div className="star">
              <img src="./img/star.png" alt="" />
              <span>{item.star}</span>
            </div>
          </div>
          <hr />
          <div className="detail">
            <div className="price">
              <span>STARTING AT</span>
              <h2>
                $ {item.precio_intervalo}
              </h2>
            </div>
          </div>
        </div>
        
      </Link>
    );
  };

export default GigCard;
