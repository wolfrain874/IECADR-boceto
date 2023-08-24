import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Todo({url}) {
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      description: description,
      imageUrl: img,
    };
    axios
      .post( url, newPost)
      .then((res) => {
        const createdPost = { ...newPost, id: res.data.id };
        setPost([...post, createdPost]);
        setTitle("");
        setDescription("");
        setImg("");
      })
      .catch((error) => {
        console.log(error);
      });

    setTitle("");
    setDescription("");
    setImg("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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
            placeholder="Titulo"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            required
            type="text"
            placeholder="Descripcion"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button type="submit">enviar</button>
        </form>
        <div className="todo-list">
          {post.slice(0, visibleItems).map((todo, index) => (
            <div className="todo-container" key={index}>
              <div className="content-todo">
                <NavLink className="todo-link" to={`/${todo.title}`}>
                  <img className="todo-img" src={todo.imageUrl} alt="" />
                  <div className="text-todo">
                    <h2 className="todo-title">{todo.title}</h2>
                    <div className="overflow">
                      <p className="todo-description">{todo.description}</p>
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

export default Todo;
