import Title from "./inicio/Title";
// api data de las mallas curriculares
import React,{useState,useEffect} from "react";
import axios from "axios";
import { curriculumUrl } from "./utils/apiUrl";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import "../style/media.css";
function Curricular() {

  const [curriculum, setCurriculum] = useState([]);
  useEffect(() => {
    axios
      .get(curriculumUrl)
      .then((res) => {
        setCurriculum(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="contenedor">
      <div className="container-proyectos">
        <Title title="Malla Curricular" />
        <div className="proyectos-container">
          {curriculum.map((item, index) => (
            <div key={index} className="proyectos">
              <NavLink to={`/malla-curricular/${item.name}`}>
                <div>
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt=""
                    className="img-proyectos"
                  />
                  <p className="proyectos-nombre">{item.name}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Curricular;