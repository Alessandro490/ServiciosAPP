import React from "react";
import "./Add.css";

const Add = () => {
    return (
      <div className="add">
        <div className="container">
          <h1>Agregar nuevo trabajo</h1>
          <div className="sections">
            <div className="info">
              <label htmlFor="">Título</label>
              <input
                type="text"
                placeholder="Por favor escribe el titulo aquí"
              />
              <label htmlFor="">Categoría</label>
              <select name="cats" id="cats">
                <option value="design">Diseño</option>
                <option value="web">Desarrollo Web</option>
                <option value="animation">Analista de datos</option>
                <option value="music">QA</option>
                <option value="music">Música</option>
                <option value="music">Jardinero</option>
              </select>
              <label htmlFor="">Imagen del trabajo</label>
              <input type="file" />
              <label htmlFor="">Subir imágenes</label>
              <input type="file" multiple />
              <label htmlFor="">Descripcion</label>
              <textarea name="" id="" placeholder="Breve descripción que introduzca tus servicios" cols="0" rows="16"></textarea>
              <button>Create</button>
            </div>
            <div className="details">
              <label htmlFor="">Título del servicio</label>
              <input type="text" placeholder="Full stack web page" />
              <label htmlFor="">Breve descripción</label>
              <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
              <label htmlFor="">Tiempo de entrega (e.j. 3 días)</label>
              <input type="number" />
              <label htmlFor="">Número</label>
              <input type="number" />
              <label htmlFor="">Agrega características</label>
              <input type="text" placeholder="Diseño UI/UX" />
              <input type="text" placeholder="Subir un funcionalidad" />
              <input type="text" placeholder="Agregar efectos" />
              <label htmlFor="">Precio</label>
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Add;