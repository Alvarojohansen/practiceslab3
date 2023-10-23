import React, { useState } from "react";
import ListTask from "../listTask/ListTask";
import AddNewTask from "../addNewTask/AddNewTask";

const FormTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "hacer compras" },
    { id: 2, task: "hacer tareas" },
    { id: 3, task: "limpieza de pc" },
  ]);

  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <div>
        <AddNewTask tasks={tasks} onAddTask={addTask} />
      </div>
      <div>
        <ListTask tasks={tasks} />
      </div>
    </div>
  );
};

export default FormTask;
