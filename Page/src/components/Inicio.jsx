import React, { useEffect, useState } from "react";
import "../style/main.css";
import Title from "./inicio/Title";
import Slider from "./inicio/sliders/Slider";
import SliderA from "./inicio/sliders/SliderA";
import SliderC from "./inicio/sliders/SliderC";
import axios from "axios";
import Links from "./inicio/Links";
import "../style/media.css";
import { NoticiasUrl, AgendaUrl,oportunidadesUrl, LinksUrl } from "./utils/apiUrl";



function Inicio() {
  const [AgendaData, setAgendaData]= useState([])
  const [noticiasData, setNoticiasData]= useState([])
  const [oportunidadesData, setOportunidadesData]= useState([])
  const [LinksData, setLinksData]= useState([])
  useEffect(()=>{
    axios.get(NoticiasUrl)
    .then(res=>{
      setNoticiasData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  useEffect(()=>{
    axios.get(AgendaUrl)
    .then(res=>{
      setAgendaData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  useEffect(()=>{
    axios.get(oportunidadesUrl)
    .then(res=>{
      setOportunidadesData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  

  useEffect(()=>{
    axios.get(LinksUrl)
    .then(res=>{
      setLinksData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  

  return (
    <div className="contenedor">
      <div className="inicio">
        <div className="content noticias">
          <Title title="Noticias" />
          <Slider data={noticiasData} />
        </div>
        <div className="content ajenda">
          <Title title="Agenda" />
          <SliderA Agendadata={AgendaData} />
        </div>
        <div className="content contenido">
          <Title title="Contenido destacado" />
          <SliderC data={oportunidadesData} />
        </div>
        <div className="content Links">
          <Links URL={LinksData} />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
