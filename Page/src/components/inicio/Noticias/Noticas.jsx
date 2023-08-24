import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { NoticiasUrl } from "../../utils/apiUrl";


function Noticias() {
  const [noticiasData, setNoticiasData] = useState([]);
  useEffect(() => {
    axios
      .get(NoticiasUrl)
      .then((res) => {
        setNoticiasData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { name } = useParams();

  const noticiaEncontrada = noticiasData.find((item) => item.title === name);

  if (!noticiaEncontrada) {
    return <div>Noticia no encontrada.</div>;
  }

  return (
    <div className="contenedor">
      <div className="page-proyecto"></div>
      <div className="encabezado">
        <img
          className="img-encabezado"
          src={noticiaEncontrada.imageUrl}
          alt=""
        />
        <div className="content-encabezado">
          <h1 className="title-encabezado">{noticiaEncontrada.title}</h1>
        </div>
      </div>
      <p className="opor-description">{noticiaEncontrada.description}</p>
    </div>
  );
}

export default Noticias;
