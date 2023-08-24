import React from "react";
import { useParams } from "react-router-dom";
import { Agendadata } from "../../../data"; // Importa desde el archivo Agenda.js

function Agenda() {
  const { Agendatitle } = useParams();

  const agendaEncontrada = Agendadata.find(
    (item) => item.Agendatitle === Agendatitle
  );

  if (!agendaEncontrada) {
    return <div>Agenda no encontrada.</div>;
  }

  return (
    <div className="contenedor">
      <div className="page-proyecto"></div>
      <div className="encabezado">
        <img
          className="img-encabezado"
          src={agendaEncontrada.imageUrl}
          alt=""
        />
        <div className="content-encabezado">
          <h1 className="title-encabezado">{agendaEncontrada.Agendatitle}</h1>
        </div>
      </div>
      <p className="opor-description">{agendaEncontrada.description}</p>
    </div>
  );
}

export default Agenda;
