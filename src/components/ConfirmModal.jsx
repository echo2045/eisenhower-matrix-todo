import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, question, onAnswer }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{question}</p>
        <div className="modal-buttons">
          <button onClick={() => onAnswer(true)}>Yes</button>
          <button onClick={() => onAnswer(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
