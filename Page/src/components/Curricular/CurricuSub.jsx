import React, { useState, useEffect } from "react";
import axios from "axios";
import { curriculumUrl } from "../utils/apiUrl";
import { useParams } from "react-router-dom";

function CurricuSub() {
  const { name } = useParams();
  const [curriculum, setCurriculum] = useState(null);


  useEffect(() => {
    axios
      .get(curriculumUrl)
      .then((res) => {
        setCurriculum(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const proyectoIndex = 0; // Índice del proyecto que deseas acceder
  const archivoIndex = 1; // Índice del archivo que deseas acceder

  if (!curriculum) {
    return <div>Cargando...</div>;
  }

  const info = curriculum[proyectoIndex].archivos[archivoIndex];
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

export default CurricuSub;
