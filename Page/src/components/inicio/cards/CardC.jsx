import React from "react";
import "../../../style/main.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, imageUrl, description }) => {
  return (
      <div className="cardC imgC-container">
        <NavLink to={`/oportunidades/${name}`}>
          {" "}
          <img src={imageUrl} alt={name} />
          <h3>{name}</h3>
        </NavLink>
      </div>
  );d
};

export default Card;