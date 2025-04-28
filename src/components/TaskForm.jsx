import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [modalStep, setModalStep] = useState(null);
  const [isImportant, setIsImportant] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !deadline) return;
    setModalStep('important');
  };

  const handleAnswer = (answer) => {
    if (modalStep === 'important') {
      setIsImportant(answer);
      setModalStep('urgent');
    } else if (modalStep === 'urgent') {
      const isUrgent = answer;
      onAddTask({ task, deadline, isImportant, isUrgent });
      setTask('');
      setDeadline('');
      setIsImportant(null);
      setModalStep(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ConfirmModal
        isOpen={modalStep === 'important'}
        question="Is this task important?"
        onAnswer={handleAnswer}
      />
      <ConfirmModal
        isOpen={modalStep === 'urgent'}
        question="Is this task urgent?"
        onAnswer={handleAnswer}
      />
    </>
  );
};

export default TaskForm;
