import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import "../style/main.css";
import "../style/media.css";
import { AboutUrl } from './utils/apiUrl';
function About() {

  const [About, setAbout] = useState([]);
  useEffect(()=>{
    axios.get(AboutUrl)
    .then(res=>{
      setAbout(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  return (
    <div className="contenedor">
      <div className="about-container">
        {About.map((item, index) => (  /*Realizamos la impresion de tosas los about tridas deste el array about*/
          <div key={index} className="about">
            <NavLink to={`/about/${item.name}`}> {/*Pagina dinamica usando el nombre de la sede*/}
              <img
                src="https://via.placeholder.com/300x300"
                alt=""
                className="img-about"
              />
              <h2 className="about-nombre">{item.name}</h2>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
