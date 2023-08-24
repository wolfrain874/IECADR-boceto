
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AboutUrl } from '../utils/apiUrl';
import "../../style/main.css";

function SeabPage() {
  const { name } = useParams(); 

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
  
  // Busca la sede correspondiente en el array de sedes
  const about = About.find((item) => item.name === name);

  if (!about) {
    return <div>Sede no encontrada.</div>;
  }

  return (
    <div className="contenedor">
      <div className="page-container">
        <div className="encabezado">
          <img className="img-encabezado" src={about.imageUrl} alt="" />
          <div className="content-encabezado">
            <h1 className="title-encabezado">{name}</h1>
          </div>
        </div>
        <h3>Te invitamos a conocer nuestra {name}</h3>
        <div className="description_container">
          <p className="about-description">{about.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SeabPage;
