import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { consejoUrl } from "./utils/apiUrl";
import Targetc from "./consejo/target"
import Title from "./inicio/Title";
import "../style/media.css";

function ConsejoD() {
  const [consejo, setConsejo]= useState([])
  useEffect(()=>{
    axios.get(consejoUrl)
    .then(res=>{
        setConsejo(res.data)
      })
    .catch(err=>{
      consejo.error(err)
    })
  })
  
  return (
    <div className="contenedor">
      <Title title="Consejo directivo" />
      <div className="consejo-container">
        {consejo.map((item, index) => (
          <div key={index} className="consejo">
            <Targetc profesores={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsejoD;
