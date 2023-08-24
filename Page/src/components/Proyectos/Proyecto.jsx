import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Route, Routes, NavLink } from "react-router-dom";
import { ProyectosUrl } from "../utils/apiUrl";
import Target from "./Target";
import Title from "../inicio/Title";
import Proy from "./Proy";
import Classroom_Logo from "../../assets/Classroom_Logo.png";
import "../../style/media.css"

function Proyecto() {
  const { name } = useParams();

  const [Proyectos, setProyectos] = useState([]);
  useEffect(() => {
    axios
      .get(ProyectosUrl)
      .then((res) => {
        setProyectos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const proyecto = Proyectos.find((item) => item.name === name);

  if (!proyecto) {
    return <div>Proyecto no encontrado.</div>;
  }
  //almacenamos la propiedad encargado del array de proyecto
  const tarjet = proyecto.encargado;

  return (
    <div className="contenedor">
      <div className="page-proyecto"></div>
      <div className="encabezado">
        <img className="img-encabezado" src={proyecto.imageUrl} alt="" />
        <div className="content-encabezado">
          <h1 className="title-encabezado">{name}</h1>
        </div>
      </div>

      <div className="description-container">
        <Target profesores={tarjet} />
        <p>{proyecto.description}</p>
      </div>

      <div className="content-proyecto">
        <Title title="Proyectos" />
        <ul className="list">
          {proyecto.archivos.length > 0 ? (
            <a href={proyecto.archivos} className="link-class">
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
        </ul>
      </div>
    </div>
  );
}

export default Proyecto;
