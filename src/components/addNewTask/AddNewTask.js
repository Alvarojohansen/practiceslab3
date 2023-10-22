import React, { useState } from "react";

const AddNewTask = ({ tasks }) => {
  const [newTask, setNewTask] = useState("");

  

  const changeNewTaskHandler = (e) => {
    setNewTask(e.target.value);
  };
  const addedTaskHandler = () => {
    if (newTask.length === 0) {
      alert("debe poner algo");
    } else {
      console.log(newTask);
      
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
      <button onClick={addedTaskHandler}>agregar</button>
    </div>
  );
};

export default AddNewTask;
