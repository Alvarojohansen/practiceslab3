import React, { useState } from "react";

const AddNewTask = ({ tasks, onAddTask }) => {

  const [newTask, setNewTask] = useState("");
  const changeNewTaskHandler = (event) => {
    setNewTask(event.target.value);
  };
  const addedTaskHandler = () => {
    if (newTask.length === 0) {
      alert("debe poner algo");
    } else {
       const newTaskObject = { id: tasks.length + 1, task: newTask };
       onAddTask(newTaskObject);
       setNewTask("");
    }
  };
  

  return (
    <div>
      <input
        type="text"
        onChange={changeNewTaskHandler}
        value={newTask}
        placeholder="Ingrese nueva tarea"
      />
      <button onClick={addedTaskHandler}>Agregar</button>
    </div>
  );
};

export default AddNewTask;
