import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categorias</h2>
            <span>Mercadeo digital</span>
            <span>Programación</span>
            <span>Big Data</span>
            <span>Negocios</span>
          </div>
          <div className="item">
            <h2>Sobre nosotros</h2>
            <span>Términos y servicios</span>
            <span>Contacta a los trabajadores</span>
          </div>
          <div className="item">
            <h2>Soporte</h2>
            <span>Ayuda y soporte</span>
            <span>Confianza y seguridad</span>
            <span>Brindar trabajos en ServiciosSv</span>
          </div>
          <div className="item">
            <h2>Más sobre nosotros</h2>
            <span>Comienza a trabajar</span>
            <span>Qué somos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;