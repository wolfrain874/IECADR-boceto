import React,{useState,useEffect} from "react";
import { useParams, Route, Routes, NavLink } from "react-router-dom";
import Title from "../inicio/Title";
import { oportunidadesUrl } from "../utils/apiUrl";
import axios from "axios";

function Oportunidad() {
  const { name } = useParams();
  const [oportunidadesData, setOportunidadesData]= useState([])
  useEffect(() => {
    axios.get(oportunidadesUrl)
      .then(res => {
        setOportunidadesData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const opor = oportunidadesData.find((item) => item.name === name);



  if (!opor) {
    return <div>Proyecto no encontrado.</div>;
  }
//almacenamos la propiedad encargado del array de proyecto

  return (
    <div className="contenedor">
      <div className="page-proyecto"></div>
      <div className="encabezado">
        <img className="img-encabezado" src={opor.imageUrl} alt="" />
        <div className="content-encabezado">
          <h1 className="title-encabezado">{name}</h1>
        </div>
      </div>
        <p className="opor-description">{opor.description}</p>
    </div>
  );
}

export default Oportunidad;