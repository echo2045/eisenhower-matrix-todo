import React from 'react';
import TaskList from './TaskList';

const Quadrant = ({ title, tasks, onComplete, className }) => {
  return (
    <div className={`quadrant ${className}`}>
      <h2>{title}</h2>
      <TaskList tasks={tasks} onComplete={onComplete} />
    </div>
  );
};

export default Quadrant;
