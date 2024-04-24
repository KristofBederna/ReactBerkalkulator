import React, { useState } from 'react';
import Modal from './Modal';
import EligibilityStatus from './EligibilityStatus';


const CheckboxForm = ({ setUnder25Checked, setPersonalTaxCutChecked, recentlyMarried, setRecentlyMarriedChecked, setEligibilityStatus }) => {
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
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = (value) => {
    setDateOfMarriage(value);
    handleCloseModal();
    setEligibilityStatus(calculateEligibilityStatus(value));
  };

  const calculateEligibilityStatus = (date) => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    const marriageDate = new Date(date);
    return marriageDate >= twoYearsAgo ? 'Eligible' : 'Not Eligible';
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
          {recentlyMarried && (
            <button onClick={handleOpenModal}>Add date of marriage</button>
          )}
        </label>
        {showModal && <Modal handleClose={handleCloseModal} handleSave={handleSaveModal} />}
        {recentlyMarried && dateOfMarriage && <EligibilityStatus dateOfMarriage={dateOfMarriage} />}
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
