import AddTodoForm from "../AddTodoForm";
import React, { useState } from "react";
import axios from "axios";
function SubTodoCu({ archivos, url }) {
  const [visibleItems, setVisibleItems] = useState(1);

  const handleLoadMore = () => {
    setVisibleItems(visibleItems + archivos.length); // Cambia el incremento según tus necesidades
  };

  const handleLoadLess = () => {
    setVisibleItems(Math.max(visibleItems - archivos.length, 1)); // Asegura que no haya menos de 2 elementos visibles
  };
  const handleDelete = (index) => {
    const archivoToDelete = archivos[index];
    const updatedArchivos = archivos.filter((_, i) => i !== index);

    if (archivos.length > 2) {
      axios
        .delete(`${url}/${archivoToDelete.id}`)
        .then(() => {
          // Actualiza los archivos en el estado
          setArchivos(updatedArchivos);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Debe haber al menos 2 elementos en la lista");
    }
  };

  return (
    <>
      <AddTodoForm />
      <ul className="archivos-list">
        {archivos.slice(0, visibleItems).map((archivo, index) => (
          <li className="archivos-container" key={index}>
            <h3 className="archivos-title">{archivo.name}</h3>
            <img
              className="archivos-img"
              src={archivo.imageUrl}
              alt={archivo.name}
            />
            <p className="archivo-description">{archivo.description}</p>
            <button className="delete" onClick={() => handleDelete(index)}>
              Eliminar
            </button>
          </li>
        ))}
        {visibleItems < archivos.length && (
          <button className="load-more-button" onClick={handleLoadMore}>
            Ver más
          </button>
        )}
        {visibleItems > 2 && (
          <button className="load-button" onClick={handleLoadLess}>
            Ver menos
          </button>
        )}
      </ul>
    </>
  );
}

export default SubTodoCu;
