import React, { useRef, useState, useEffect } from "react";
import "./Gigs.css";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [gigs, setGigs] = useState([]);
  const minRef = useRef();
  const maxRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gigs');
        const data = await response.json();
        setGigs(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs"> Servicios SV</span>
        <h1>Todos los trabajadores</h1>
        <p>
          Explora el mercado de trabajadores independientes y encuentra el que se acople a ti 
        </p>
        <div className="menu">
          <div className="left">
            <span>Presupuesto</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordenar por</span>
            <span className="sortType">
              {sort === "sales" ? "Más vendido" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best servives</span>
                  )}
                  <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.servicio_id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;