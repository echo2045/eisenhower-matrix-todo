import React from 'react';

const TaskList = ({ tasks, onComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onComplete(task.id)}
          />
          <span style={{ marginLeft: '10px' }}>
            {task.task} — {new Date(task.deadline).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
