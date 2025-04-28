import React from 'react';

const CompletedTasks = ({ tasks }) => {
  return (
    <div className="completed-tasks">
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`completed ${task.quadrant}`}>
            {task.task} - Completed at {new Date(task.completed_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
