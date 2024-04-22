import React, { useState } from 'react';
import Modal from './Modal';

const CheckboxForm = ({ setUnder25Checked, setPersonalTaxCutChecked }) => {
  const [recentlyMarriedChecked, setRecentlyMarriedChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dateOfMarriage, setDateOfMarriage] = useState('');

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (id === 'under25') {
      setUnder25Checked(checked);
    } else if (id === 'personalTaxCut') {
      setPersonalTaxCutChecked(checked);
    } else if (id === 'recentlyMarried') {
      setRecentlyMarriedChecked(checked);
    }
  };

  const handleOpenModal = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = (value) => {
    setDateOfMarriage(value);
    handleCloseModal();
  };

  return (
    <div>
      <form>
        <label>
          <input type="checkbox" id="under25" onChange={handleCheckboxChange} /> Under 25 year old
        </label>
        <br />
        <label>
          <input type="checkbox" id="recentlyMarried" onChange={handleCheckboxChange} /> Recently married
          {recentlyMarriedChecked && (
            <button onClick={handleOpenModal}>Add date of marriage</button>
          )}
        </label>
        {showModal && <Modal handleClose={handleCloseModal} handleSave={handleSaveModal} />}
        {dateOfMarriage && <p>Date of Marriage: {dateOfMarriage}</p>}
        <br />
        <label>
          <input type="checkbox" id="personalTaxCut" onChange={handleCheckboxChange} /> Personal tax cut
        </label>
        <br />
        <label>
          <input type="checkbox" id="familyTaxCut" onChange={handleCheckboxChange} /> Family tax cut
        </label>
      </form>
    </div>
  );
};

export default CheckboxForm;
