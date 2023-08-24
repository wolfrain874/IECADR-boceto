import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { curriculumUrl } from "../utils/apiUrl";
import Target from "../Proyectos/Target";
import Title from "../inicio/Title";
import Classroom_Logo from "../../assets/Classroom_Logo.png";

function Curricu() {
  const { name } = useParams();

  const [curriculum, setCurriculum] = useState([]);
  useEffect(() => {
    axios
      .get(curriculumUrl)
      .then((res) => {
        setCurriculum(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const curricu = curriculum.find((item) => item.name === name);

  if (!curricu) {
    return <div>curricu no encontrado.</div>;
  }
  //almacenamos la propiedad encargado del array de curricu
  const tarjet = curricu.encargado;

  return (
    <div className="contenedor">
      <div className="page-curricu"></div>
      <div className="encabezado">
        <img className="img-encabezado" src={curricu.imageUrl} alt="" />
        <div className="content-encabezado">
          <h1 className="title-encabezado">{name}</h1>
        </div>
      </div>

      <div className="description-container">
        <Target profesores={tarjet} />
        <p>{curricu.description}</p>
      </div>

      <div className="content-curricu">
        <Title title="Temas" />
        {curricu.archivos.length > 0 ? (
          <a href={curricu.archivos} className="link-class">
            <div className="link-class_container">
              <img src={Classroom_Logo} alt="" />
              <h2>Accede al Classroom</h2>
            </div>
          </a>
        ) : (
          <a href="https://classroom.google.com" className="link-class">
            <div className="link-class_container">
              <img src={Classroom_Logo} alt="" />
              <h2>Accede al Classroom</h2>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default Curricu;
