import React, { useState } from 'react'

const ListTask = ({ tasks, setTasks }) => {
  const [taskStates, setTaskStates] = useState(tasks.map(() => false));


  const onTachTaskHandler = (index) => {
    const newTaskStates = [...taskStates];
    newTaskStates[index] = !newTaskStates[index];
    setTaskStates(newTaskStates);
  };

  const onDeleteTaskHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTaskStates(taskStates.filter((_, i) => i !== index));
    setTasks(updatedTasks);
  };
  

  return (
    <div>
      <div>
        {tasks.map((item, index) => (
          <div key={item.id}>
            <p style={{ textDecoration: taskStates[index] ? 'line-through' : 'none' }}>{item.task}</p>
            <button onClick={() => onTachTaskHandler(index)}>
              {taskStates[index] ? 'Destachar' : 'Tachar'}
            </button>
            <button onClick={() => onDeleteTaskHandler(index)}>borrar tarea</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTask;

