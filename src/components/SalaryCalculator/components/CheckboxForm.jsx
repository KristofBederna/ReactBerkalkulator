import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import EligibilityStatus from './EligibilityStatus';
import FamilyTaxCutInput from './FamilyTaxCutInput';


const CheckboxForm = ({ currentUser, setUnder25Checked, setPersonalTaxCutChecked, recentlyMarried, setRecentlyMarriedChecked, setEligibilityStatus, familyTaxCutChecked, setFamilyTaxCutChecked, kidsInTheFamily, setKidsInTheFamily, kidsWithBenefits, setkidsWithBenefits }) => {
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
    } else if (id === 'familyTaxCut') {
      setFamilyTaxCutChecked(checked);
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
    setDateOfMarriage('');
    return marriageDate >= twoYearsAgo ? 'Eligible' : 'Not Eligible';
  };

  return (
    <div>
      <form>
        <label>
          <input type="checkbox" id="under25" checked={currentUser.under25Checked} onChange={handleCheckboxChange} /> Under 25 year old
        </label>
        <br />
        <label>
          <input type="checkbox" id="recentlyMarried" checked={currentUser.recentlyMarriedChecked} onChange={handleCheckboxChange} /> Recently married
          {recentlyMarried && (
            <button onClick={handleOpenModal}>Add date of marriage</button>
          )}
        </label>
        {showModal && <Modal handleClose={handleCloseModal} handleSave={handleSaveModal} />}
        {recentlyMarried && currentUser.eligibilityStatus && <EligibilityStatus eligibilityStatus={currentUser.eligibilityStatus} />}
        <br />
        <label>
          <input type="checkbox" id="personalTaxCut" checked={currentUser.personalTaxCutChecked} onChange={handleCheckboxChange} /> Personal tax cut
        </label>
        <br />
        <label>
          <input type="checkbox" id="familyTaxCut" checked={currentUser.familyTaxCutChecked} onChange={handleCheckboxChange} /> Family tax cut
        </label>
        {familyTaxCutChecked && <FamilyTaxCutInput kidsInTheFamily={kidsInTheFamily} setKidsInTheFamily={setKidsInTheFamily} kidsWithBenefits={kidsWithBenefits} setkidsWithBenefits={setkidsWithBenefits} />}
      </form>
    </div>
  );
};

export default CheckboxForm;
