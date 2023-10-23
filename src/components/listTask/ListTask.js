import React, { useState } from 'react'

const ListTask = ({ tasks }) => {
  const [taskStates, setTaskStates] = useState(tasks.map(() => false));

  const onTachTaskHandler = (index) => {
    const newTaskStates = [...taskStates];
    newTaskStates[index] = !newTaskStates[index];
    setTaskStates(newTaskStates);
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTask;

