// Modal.js
import React from 'react';
import './Modal.css'; // Create a CSS file for modal styling

const Modal = ({ show, onHide, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
