import { oportunidadesUrl } from "./utils/apiUrl";
import axios from "axios";
import Title from "./inicio/Title";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/media.css";


function Oports() {
  const [oportunidadesData, setOportunidadesData]= useState([])
  useEffect(()=>{
    axios.get(oportunidadesUrl)
    .then(res=>{
      setOportunidadesData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  return (
    <div className="contenedor">
      <div className="container-proyectos">
        <Title title="Oportunidades Educativas"/>
        <div className="proyectos-container">
          {oportunidadesData.map((item, index) => (
            <div key={index} className="proyectos">
              <NavLink to={`/oportunidades/${item.name}`}>
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

export default Oports;
