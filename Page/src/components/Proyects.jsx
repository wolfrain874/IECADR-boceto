import Title from "./inicio/Title";
import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ProyectosUrl, SecundProyectosUrl } from "./utils/apiUrl";
import { NavLink } from "react-router-dom";
import "../style/media.css";
import "../style/main.css";

function Proyect() {
  
const [Proyectos, setProyectos] = useState([]);
const [SecundProyectos, setSecundProyectos] = useState([]);
useEffect(()=>{
  axios.get(ProyectosUrl)
  .then(res=>{
    setProyectos(res.data)
  })
  .catch((error)=>{
    console.log(error);
  })
}, [])
useEffect(()=>{
  axios.get(SecundProyectosUrl)
  .then(res=>{
    setSecundProyectos(res.data)
  })
  .catch((error)=>{
    console.log(error);
  })
}, [])
  return (
    <div className="contenedor">
      <div className="container-proyectos">
        <Title title="Proyectos" />
        <div className="proyectos-container">
          {Proyectos.map((item, index) => (
            <div key={index} className="proyectos">
              <NavLink to={`/proyectos/${item.name}`}>
                <div>
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="img-proyectos"
                  />
                  <p className="proyectos-nombre">{item.name}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyect;
