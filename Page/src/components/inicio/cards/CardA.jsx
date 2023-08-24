import React from "react";
import "../../../style/main.css";
import { NavLink } from "react-router-dom";

const CardA = ({ Agendatitle, imageUrl, description }) => {
  return (
    <div className="cardA">
      <div>
        {" "}
        <img src={imageUrl} alt={Agendatitle} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CardA;
