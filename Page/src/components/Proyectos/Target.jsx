
import "../../style/main.css";
function Target({ profesores }) {
    // almacena los datos correspondiente de cada profesor desde el objeto profesores
  const prof = profesores;
  if (!prof) {
    return <div>Proyecto no encontrado.</div>;
  }

  return (
    <div className="target-container">
      <img className="img-target" src={prof.imageUrl} alt="" />
      <div className="info-target">
        <p>
          <strong>Encargado:<br/></strong>
          {prof.name}
        </p>
        <p>
          <strong>Sede:<br/></strong>
          {prof.sede}
        </p>
      </div>
    </div>
  );
}

export default Target;
