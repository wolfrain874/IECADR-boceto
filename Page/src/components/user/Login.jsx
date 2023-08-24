import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { usuarioUrl } from "../utils/apiUrl";

const baseUrl = usuarioUrl;
const cookies = new Cookies();

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.get("username")) {
      window.location.href = "./"; // Redirige si ya ha iniciado sesión
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const iniciarSesion = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          username: form.username,
          password: md5(form.password),
        },
      });

      if (response.data.length > 0) {
        const respuesta = response.data[0];
        cookies.set("id", respuesta.id, { path: "/" });
        cookies.set("nombre", respuesta.nombre, { path: "/" });
        cookies.set("username", respuesta.username, { path: "/" });
        localStorage.setItem("auth", "true"); // Guarda el estado de autenticación en el Local Storage
        navigate("/perfil");
      } else {
        alert("El usuario o la contraseña no son correctos");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div >
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <form className="form-group todo-form" onSubmit={handleSubmit}>
            {/* Importar el logo y pasarlo como src */}
            <div>
              <img
                className="login-img"
                src="https://via.placeholder.com/200x200"
                alt=""
              />
            </div>
            <h3 className="login-title">
              Bienvenido a Carlos Arturo Duque Ramirez
            </h3>
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={iniciarSesion}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
