import {
  NoticiasUrl,
  AgendaUrl,
  perfilImg,
  oportunidadesUrl,
  curriculumUrl,
  ProyectosUrl,
  consejoUrl
} from "../utils/apiUrl";
import perfil from "../../assets/perfil.jpg";
import Todo from "./todos/Todo";
import TodoA from "./todos/TodoA";
import TodoOp from "./todos/TodoOP";
import TodoCu from "./todos/TodoCu";
import TodoPr from "./todos/TodoPr";
import Consejod from "./todos/Consejod";

function AdminPerfil() {
  return (
    <div className="contenedor admin">
      <img className="perfil-image" src={perfil} alt="" />
      <p className="admin-p"> 
        <strong>Bienvenido:</strong> <br/>IECADR{" "}
      </p>
      <div className="post-content">
        <h2 className="title-container">Noticias</h2>
        <Todo url={NoticiasUrl} />
      </div>
      <div className="post-content">
        <h2 className="title-container">Agenda</h2>
        <TodoA url={AgendaUrl} />
      </div>
      <div className="post-content">
        <h2 className="title-container">Oportunidades</h2>
        <TodoOp url={oportunidadesUrl} />
      </div>
      <div className="post-content">
        <h2 className="title-container">Plan de estudios</h2>
        <TodoCu url={curriculumUrl} />
      </div>
      <div className="post-content">
        <h2 className="title-container">Proyectos</h2>
        <TodoPr url={ProyectosUrl} />
      </div>
      <div className="post-content">
        <h2 className="title-container">Consejo directivo</h2>
        <Consejod url={consejoUrl} />
      </div>
    </div>
  );
}

export default AdminPerfil;
