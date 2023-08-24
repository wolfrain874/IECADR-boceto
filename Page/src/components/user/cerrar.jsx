import React from "react";
import { PropTypes } from "prop-types";
import Cookies from "universal-cookie";
import { NavLink, Navigate } from "react-router-dom";

const cookies = new Cookies();
function componentDidMount() {
  if (!cookies.get("username")) {
    window.location.href = "./";
  }
}
function Cerrar() {
  const handleIngresarClick = () => {
    <Navigate to="/login" replace />;
  };

  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("username", { path: "/" });
    localStorage.removeItem("auth"); // Elimina el estado de autenticación del Local Storage
    window.location.href = "./";
  };

  if (!cookies.get("username")) {
    return (
      <div className="btn-sesion">
        <NavLink className="link-sesion" to={"/login"}>
          <button className="ingresar">Ingresar</button>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="btn-sesion">
        <button className="cerrar" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    );
  }
}

export default Cerrar;
