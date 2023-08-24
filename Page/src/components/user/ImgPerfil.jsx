import { NavLink } from "react-router-dom";
import Perfil from "../../assets/perfil.jpg";

function ImgPerfil() {
  return (
    <>
      <NavLink className="perfilUrl" to="/perfil">
        <img className="perfil-img" src={Perfil} alt="Profile"></img>
      </NavLink>
    </>
  );
}

export default ImgPerfil;
