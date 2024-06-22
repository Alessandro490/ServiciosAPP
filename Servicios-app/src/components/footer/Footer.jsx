import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics</span>
            <span>Digital Marketing</span>
            <span>Programming</span>
            <span>Data</span>
            <span>Business</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Terms of Service</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Servicios SV</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
          </div>
          <div className="item">
            <h2>More From Servicios SV</h2>
            <span>Get Inspired</span>
            <span>Learn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;