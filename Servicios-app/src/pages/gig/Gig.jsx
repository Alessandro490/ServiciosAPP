import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Gig.css";
import noPhotoIcon from "../../../src/img/no-photo.jpg";

const Gig = () => {
  const { id } = useParams(); // Extract the id from the URL
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/gig/${id}`); // Use the extracted id
        if (!response.ok) {
          throw new Error("Failed to fetch gig details");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data
        if (data.length > 0) {
          setGig(data[0]); // Set the first item in the array
        } else {
          setGig(null); // No data found
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGig();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

return (
    <div className="gig">
        {gig ? (
            <>
                <h1>{gig.nombre_servicio}</h1>
                <img src={gig.foto_servicio ? `data:image/jpeg;base64,${gig.foto_servicio}` : noPhotoIcon} alt={gig.nombre_servicio} />
                <p>{gig.descripcion_servicio}</p>
                {gig.tipo_intervalo === 'cotizable' ? (
                    <p>Precio: {gig.tipo_intervalo}</p>
                ) : (
                    <>
                        <p>Precio: ${gig.precio_intervalo} por {gig.tipo_intervalo}</p>
                    </>
                )}
                <p>Categorias: {gig.categorias}</p>
                <p>Por: {gig.nombre} {gig.apellido}</p>
                <p>Numero contacto: {gig.telefono} </p>
                <p>Correo: {gig.correo_electronico} </p>
            </>
        ) : (
            <div>No gig found</div>
        )}
    </div>
);
};

export default Gig;
