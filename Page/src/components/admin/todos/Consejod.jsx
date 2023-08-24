import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Consejod({url}) {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [visibleItems, setVisibleItems] = useState(1);

  const handleLoadMore = () => {
    setVisibleItems(visibleItems + post.length); // Cambia el incremento según tus necesidades
  };

  const handleLoadLess = () => {
    setVisibleItems(Math.max(visibleItems - post.length, 1)); // Asegura que no haya menos de 2 elementos visibles
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("");
  const [sede, setSede] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name: name,
      ocupacion: cargo,
      imageUrl: img,
      sede: sede,
    };
    axios
      .post( url, newPost)
      .then((res) => {
        const createdPost = { ...newPost, id: res.data.id };
        setPost([...post, createdPost]);
        setName("");
        setCargo("");
        setImg(" ");
        setSede("")
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setCargo("");
    setImg(" ");
    setSede("")
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCargoChange = (e) => {
    setCargo(e.target.value);
  };
  const handleSedeChange = (e) => {
    setSede(e.target.value);
    console.log(sede);
  };
  const handleImageChange = (e) => {
    setImg(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedPost = post.filter((_, i) => i !== index);
    const postToDelete = post[index];
    if (post.length > 2) {
      const postToDelete = post[index];

      axios
        .delete(`${url}/${postToDelete.id}`)
        .then(() => {
          const updatedPost = post.filter((_, i) => i !== index);
          setPost(updatedPost);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Debe haber al menos 2 elementos en la lista");
    }
    setPost(updatedPost);
  };

  return (
    <>
      <div className="container post-content">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Imagen Url"
            onChange={handleImageChange}
          />
          <input
            required
            type="text"
            placeholder="nombre"
            value={name}
            onChange={handleNameChange}
          />
          <input
            required
            type="text"
            placeholder="cargo"
            value={cargo}
            onChange={handleCargoChange}
          />
           <input
            required
            type="text"
            placeholder="sede"
            value={sede}
            onChange={handleSedeChange}
          />
          <button type="submit">enviar</button>
        </form>
        <div className="todo-list">
          {post.slice(0, visibleItems).map((todo, index) => (
            <div className="todo-container" key={index}>
              <div className="content-todo">
                <NavLink className="todo-link" to={`/consejo-directivo`}>
                  <img className="todo-img" src={todo.imageUrl} alt="" />
                  <div className="text-todo">
                    <p className="todo-title"><strong>nombre:</strong><br/>{todo.name}</p>
                    <div className="overflow">
                      <p className="todo-description"><strong>cargo:</strong><br/>{todo.ocupacion}</p>
                      <p className="todo-description"><strong>sede:</strong><br/>{todo.sede}</p>
                    </div>
                  </div>
                </NavLink>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          {visibleItems < post.length && (
            <button className="load-more-button" onClick={handleLoadMore}>
              Ver más
            </button>
          )}
          {visibleItems > 2 && (
            <button className="load-button" onClick={handleLoadLess}>
              Ver menos
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Consejod;