import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cerrar from "../user/cerrar";
import ImgPerfil from "../user/ImgPerfil";
function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isMediaQueryActive, setIsMediaQueryActive] = useState(false);
  const refMenu = useRef();
  const refIcon = useRef();
  const refNavContainer = useRef();
  const refBtnToggle = useRef();

  useEffect(() => {
    // Verificar el estado del media query aquí
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMediaQueryActive(mediaQuery.matches);

    // Agregar un listener para rastrear los cambios en el media query
    const mediaQueryListener = (event) => {
      setIsMediaQueryActive(event.matches);
    };
    mediaQuery.addListener(mediaQueryListener);

    return () => {
      // Limpiar el listener cuando el componente se desmonte
      mediaQuery.removeListener(mediaQueryListener);
    };
  }, []);

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
      refMenu.current.style.top = "-100%";
      refIcon.current.classList.replace("bi-x-lg", "bi-list");
    } else {
      setMenuToggle(true);
      const calculate = refNavContainer.current.offsetTop - 200;
      refMenu.current.style.top = -calculate + "px";
      refIcon.current.classList.replace("bi-list", "bi-x-lg");
    }
  };
  const handleNavLinkClick = () => {
    refMenu.current.style.top = "-100%";
    setMenuToggle(false);
    refIcon.current.classList.replace("bi-x-lg", "bi-list");
  };

  return (
    <nav ref={refNavContainer} className="nav-container">
      <button onClick={handleToggle} ref={refBtnToggle} className="btnToggle">
        <i ref={refIcon} className="bi bi-list fs-1"></i>
      </button>

      <div ref={refMenu} className="nav">
        {/* Enlaces de navegación */}
        <NavLink
          onClick={handleNavLinkClick}
          to="/sedes"
          className="nav-button"
        >
          Sedes
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/about"
          className="nav-button"
        >
          Sobre nosotros
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/proyectos"
          className="nav-button"
        >
          Proyectos
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/malla-curricular"
          className="nav-button"
        >
          Plan de estudios
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/oportunidades"
          className="nav-button"
        >
          Oportunidades
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/manual"
          className="nav-button"
        >
          Manual de convivencia
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/consejo-directivo"
          className="nav-button"
        >
          Consejo directivo
        </NavLink>

        <div className="perfil">
          {isMediaQueryActive && <ImgPerfil />}
          {isMediaQueryActive && <Cerrar />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
