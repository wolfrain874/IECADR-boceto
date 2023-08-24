import React, { useState } from "react";

function AddTodoForm({
  handleSubmit,
  name,
  img,
  description,
  setImg,
  setDescription,
  setName,
  encName,
  encImgUrl,
  encSede,
  setEncName,
  setEncImgUrl,
  setEncSede,
  archivos,
  setArchivos,
  clase
}) {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImg(e.target.value);
  };
  const handleEncName = (e) => {
    setEncName(e.target.value);
  };
  const handleEncImgUrl = (e) => {
    setEncImgUrl(e.target.value);
  };
  const handleEncSede = (e) => {
    setEncSede(e.target.value);
  };
  const handleArchivos=(e)=>{
    setArchivos(e.target.value);
  }

  return (
    <form className="todo-form form-PP" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Imagen Url"
        value={img}
        onChange={handleImageChange}
      />
      <input
        required
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={handleNameChange}
      />
      <input
        required
        type="text"
        placeholder="Descripcion"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit" className={clase} >enviar</button>
      <input
        required
        type="text"
        placeholder="Url foto del encargado"
        value={encImgUrl}
        onChange={handleEncImgUrl}
      />
      <input
        required
        type="text"
        placeholder="Nombre del encargado"
        value={encName}
        onChange={handleEncName}
      />
      <input
        required
        type="text"
        placeholder="Sede del encargado"
        value={encSede}
        onChange={handleEncSede}
      />
      <input
        type="text"
        placeholder="Link classroom"
        value={archivos}
        onChange={handleArchivos}
      />
    </form>
  );
}

export default AddTodoForm;
