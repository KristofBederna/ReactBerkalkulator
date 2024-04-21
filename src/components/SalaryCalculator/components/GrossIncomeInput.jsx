import React from 'react';

const GrossIncomeInput = ({ grossIncome, setGrossIncome, setInputValue, calculateNetIncome }) => {
  return (
    <div>
      <label>Gross Income:</label>
      <input
        type="number"
        value={grossIncome}
        onChange={(e) => {
          const newGross = parseFloat(e.target.value);
          setGrossIncome(newGross);
          setInputValue(newGross);
          calculateNetIncome();
        }}
      />
    </div>
  );
};

export default GrossIncomeInput;
