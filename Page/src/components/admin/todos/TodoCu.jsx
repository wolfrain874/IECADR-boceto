import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SubTodoCu from "./subTodos/SubTodoCu";
import AddTodoForm from "./AddTodoForm";

function Todo({ url }) {
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
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [encName, setEncName]= useState("");
  const [encImgUrl, setEncImgUrl]= useState("");
  const [encSede, setEncSede]= useState("");
  const [archivos, setArchivos]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name: name,
      description: description,
      imageUrl: img,
      archivos:archivos,
      encargado:{
        name: encName,
        imageUrl: encImgUrl,
        sede: encSede
      }
    };
    axios
      .post(url, newPost)
      .then((res) => {
        const createdPost = { ...newPost, id: res.data.id };
        setPost([...post, createdPost]);
        setName("");
        setDescription("");
        setImg("");
        setArchivos("");
        setEncName("");
        setEncImgUrl("");
        setEncSede("");
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setDescription("");
    setImg("");
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
      <AddTodoForm
        handleSubmit={handleSubmit}
        img={img}
        name={name}
        description={description}
        setImg={setImg}
        setName={setName}
        setDescription={setDescription}
        encName={encName}
        encImgUrl={encImgUrl}
        encSede={encSede}
        setEncName={setEncName}
        setEncImgUrl={setEncImgUrl}
        setEncSede={setEncSede}
        archivos={archivos}
        setArchivos={setArchivos}
        clase="botton-cu"
      />
      <div className="container post-content">
        <div className="todo-list">
          {post.slice(0, visibleItems).map((todo, index) => (
            <div className="todo-container" key={index}>
              <div className="content-todo">
                <NavLink
                  className="todo-link"
                  to={`/malla-curricular/${todo.name}`}
                >
                  <img className="todo-img" src={todo.imageUrl} alt="" />
                  <div className="text-todo">
                    <h2 className="todo-title">{todo.name}</h2>
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
