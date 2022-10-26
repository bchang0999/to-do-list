import React, { useState } from "react";
import "../styles/List.css";
import Tasks from "./Tasks";


function List() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");


  const create = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteHandler = ({ e, currentTask }) => {
    setTasks(tasks.filter((task) => task !== currentTask));
  };


  return (
    <div className="list">
      <form className="list__form" onSubmit={create}>

        <h1
          className="list__title">
          Things to knock out!
        </h1>

        <div className="list__order">

          <input
            className="list__input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Add task"
          />

          <button
            type="submit"
            className="list__btn"
          >
            Add
          </button>

        </div>

        </form>

        <div className="list__tasks">
          {tasks.length > 0 && tasks.map((task, i) => (
            <Tasks className key={i} name={task} deleteHandler={deleteHandler} />
          ))}

        </div>


    </div>
  );





}


export default List;
