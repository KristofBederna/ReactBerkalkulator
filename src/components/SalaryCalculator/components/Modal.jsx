import React, { useState } from 'react';

const Modal = ({ handleClose, handleSave }) => {
  const [dateOfMarriage, setDateOfMarriage] = useState('');

  const handleChange = (e) => {
    setDateOfMarriage(e.target.value);
  };

  const handleSaveClick = () => {
    handleSave(dateOfMarriage);
    setDateOfMarriage('');
    handleClose();
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
  };

  const closeModalStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeModalStyle} onClick={handleClose}>&times;</span>
        <label htmlFor="dateOfMarriage">Date of Marriage:</label>
        <input type="text" id="dateOfMarriage" value={dateOfMarriage} onChange={handleChange} />
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
