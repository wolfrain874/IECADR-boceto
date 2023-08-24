import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/main.css";
import "../style/media.css";
import Cerrar from "./user/cerrar";
import Nav from "./navegacion/Nav";
import ImgPerfil from "./user/ImgPerfil";

function Header() {
  const [isMediaQueryActive, setIsMediaQueryActive] = useState(false); // Agrega la declaración de isMediaQueryActive

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMediaQueryActive(mediaQuery.matches);

    const mediaQueryListener = (event) => {
      setIsMediaQueryActive(event.matches);
    };
    mediaQuery.addListener(mediaQueryListener);

    return () => {
      mediaQuery.removeListener(mediaQueryListener);
    };
  }, []);
  return (
    <div className="header-container">
      <div className="logo-container">
        <NavLink to="/" className="logo-container">
          <img
            className="logo"
            src="https://via.placeholder.com/60x60"
            alt="logo"
          />
          <p className="name">I.E.C.A.D.R</p>
        </NavLink>
        <div className="perfil">
          {!isMediaQueryActive && <ImgPerfil/>}
          {!isMediaQueryActive && <Cerrar />}
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
