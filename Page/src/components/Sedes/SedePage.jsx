import { useParams } from "react-router-dom";
import axios from "axios";
import { sedesUrl } from "../utils/apiUrl";
import { useState, useEffect } from "react";
import "../../style/main.css";
import "../../style/media.css"

function SeabPage() {
  const { name } = useParams();


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


  // Busca la sede correspondiente en el array de sedes
  const sede = sedes.find((item) => item.name === name);

  if (!sede) {
    return <div>Sede no encontrada.</div>;
  }

  return (
    <div className="contenedor">
      <div className="sede-container">
        <div className="img-container">
          <img className="sedes-img" src={sede.imageUrl} alt="" />
          <div className="title-content">
            <h1 className="sedes-title">Sede {name}</h1>
          </div>
          <h2>Bienvenido a nuestra institución educativa {name}</h2>
        </div>
        <div className="description_container">
          <p className="sede-description">{sede.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SeabPage;
