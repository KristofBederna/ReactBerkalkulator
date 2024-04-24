import React from 'react';

const FamilyTaxCutInput = ({ setKidsInTheFamily, setkidsWithBenefits }) => {
  return (
    <div>
      <input type="number" id='kids' min={0} onChange={
        (e) => {
          document.getElementById('benefits').max = e.target.value;
          if (document.getElementById('benefits').value > e.target.value) {
            document.getElementById('benefits').value = e.target.value;
            setkidsWithBenefits(parseInt(e.target.value))
          }
          setKidsInTheFamily(parseInt(e.target.value))
        }
      } />
      <p>With benefits: </p>
      <input type="number" id='benefits' min={0} onChange={(e) => setkidsWithBenefits(parseInt(e.target.value))} />
    </div>
  );
};

export default FamilyTaxCutInput;
