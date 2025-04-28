import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import Quadrant from './components/Quadrant';
import CompletedTasks from './components/CompletedTasks';
import './styles/index.css'; // make sure your CSS is imported!

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchCompletedTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    setTasks(data);
  };

  const fetchCompletedTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks/completed');
    const data = await res.json();
    setCompleted(data);
  };

  const addTask = async (task) => {
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const completeTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}/done`, {
      method: 'PUT',
    });
    fetchTasks();
    fetchCompletedTasks();
  };

  return (
    <div className="app">
      <h1>Eisenhower Matrix</h1>
      <TaskForm onAddTask={addTask} />

      <div className="matrix">
        <Quadrant
          title="Do"
          tasks={tasks.filter(task => task.is_important && task.is_urgent)}
          onComplete={completeTask}
          className="do"
        />
        <Quadrant
          title="Schedule"
          tasks={tasks.filter(task => task.is_important && !task.is_urgent)}
          onComplete={completeTask}
          className="schedule"
        />
        <Quadrant
          title="Delegate"
          tasks={tasks.filter(task => !task.is_important && task.is_urgent)}
          onComplete={completeTask}
          className="delegate"
        />
        <Quadrant
          title="Delete"
          tasks={tasks.filter(task => !task.is_important && !task.is_urgent)}
          onComplete={completeTask}
          className="delete"
        />
      </div>

      <CompletedTasks tasks={completed} />
    </div>
  );
};

export default App;
