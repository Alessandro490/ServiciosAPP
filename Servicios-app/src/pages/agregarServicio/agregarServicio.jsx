import React, { useState } from 'react';
import axios from 'axios';

const AgregarServicio = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenBase64, setImagenBase64] = useState('');

  const handleImagenSeleccionada = (event) => {
    const imagenSeleccionada = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imagenSeleccionada);
    reader.onloadend = () => {
      setImagenBase64(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Aquí enviarías los datos al servidor, por ejemplo con Axios
      const response = await axios.post('URL_DEL_ENDPOINT', {
        nombre,
        descripcion,
        imagenBase64,
      });
      
      console.log('Servicio agregado:', response.data);
      // Aquí podrías redirigir a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al agregar servicio:', error);
      // Aquí podrías manejar el error de alguna manera (mostrar mensaje, etc.)
    }
  };

  return (
    <div>
      <h2>Agregar Servicio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del servicio:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Imagen (formato base64):
          <input
            type="file"
            accept="image/*"
            onChange={handleImagenSeleccionada}
            required
          />
        </label>
        <br />
        {imagenBase64 && (
          <img src={imagenBase64} alt="Preview de la imagen" style={{ maxWidth: '200px' }} />
        )}
        <br />
        <button type="submit">Agregar Servicio</button>
      </form>
    </div>
  );
};

export default AgregarServicio;