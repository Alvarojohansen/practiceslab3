import React from "react";
import ListTask from "../listTask/ListTask";
import AddNewTask from "../addNewTask/AddNewTask";

const FormTask = ({ tasks }) => {
  return (
    <div>
      <div>
        <AddNewTask tasks={tasks} />
      </div>
      <div>
        <ListTask tasks={tasks}/>
      </div>
    </div>
  );
};

export default FormTask;
