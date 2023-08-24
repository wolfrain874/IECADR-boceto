import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProyectosUrl } from "../utils/apiUrl";
import axios from "axios";

function Proy() {
  const { name } = useParams();
  const [proye, setProye] = useState(null);


  useEffect(() => {
    axios
      .get(ProyectosUrl)
      .then((res) => {
        setProye(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const proyectoIndex = 0; // Índice del proyecto que deseas acceder
  const archivoIndex = 1; // Índice del archivo que deseas acceder

  if (!proye) {
    return <div>Cargando...</div>;
  }

  const info = proye[proyectoIndex].archivos[archivoIndex];
  return (
    <div className="contenedor">
      <div className="sub-container">
        <div className="title-container">
          <h1>{name}</h1>
        </div>
        <img className="img-sub" src={info.imageUrl} alt="" />
        <p className="description-sub">{info.description}</p>
      </div>
    </div>
  );
}

export default Proy;
