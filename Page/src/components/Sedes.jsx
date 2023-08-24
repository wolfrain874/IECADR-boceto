import axios from "axios";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import { sedesUrl } from "./utils/apiUrl";
import "../style/media.css";
import { useState, useEffect } from "react";

function Sedes() {
  const [sedes, setSedes] = useState([]);
  useEffect(()=>{
    axios.get(sedesUrl)
    .then(res=>{
      setSedes(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  return (
    <div className="contenedor">
      <div className="sedes-container">
        {sedes.map((item, index) => ( /*Realizamos la impresion de tosas las sedes tridas deste la data*/
          <div key={index} className="sedes">
            <NavLink to={`/sedes/${item.name}`}> {/*Pagina dinamica usando el nombre de la sede*/}
              <img
                src={item.imageUrl} // Usa la URL de la imagen de la sede desde el array
                alt=""
                className="img-sede"
              />
              <h2 className="sedes-nombre">{item.name}</h2>
              {/* Muestra el nombre de la sede */}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sedes;
