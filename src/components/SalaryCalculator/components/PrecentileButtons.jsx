import React from 'react';

const PrecentileButtons = ({ adjustGrossIncome }) => {
  return (
    <div>
      <button onClick={() => adjustGrossIncome(-5)}>-5%</button>
      <button onClick={() => adjustGrossIncome(-1)}>-1%</button>
      <button onClick={() => adjustGrossIncome(1)}>+1%</button>
      <button onClick={() => adjustGrossIncome(5)}>+5%</button>
    </div>
  );
};

export default PrecentileButtons;
