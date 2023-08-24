import React from "react";
import "../../../style/main.css";
import { NavLink } from "react-router-dom";

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <div className="img-container">
        <NavLink to={title}>
          {" "}
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
        </NavLink>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
