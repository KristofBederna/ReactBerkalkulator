import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [userName, setUserName] = useState("");
  const [grossIncome, setGrossIncome] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [sliderPercentage, setSliderPercentage] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // Function to calculate net income
  const calculateNetIncome = () => {
    // Your net income calculation logic here
    // Example: let's assume net income is 90% of the gross income
    const calculatedNetIncome = grossIncome * 0.9;
    setNetIncome(calculatedNetIncome);
  };

  // Function to handle percentage buttons
  const adjustGrossIncome = (percentChange) => {
    const newGrossIncome = inputValue * (1 + percentChange / 100);
    setGrossIncome(newGrossIncome);
    setInputValue(newGrossIncome);
    calculateNetIncome();
  };

  // Function to handle slider change
  const handleSliderChange = (e) => {
    const sliderValue = parseFloat(e.target.value);
    setSliderPercentage(sliderValue);
    const newGrossIncome = inputValue * (1 + sliderValue / 100);
    setGrossIncome(newGrossIncome);
    setInputValue(newGrossIncome);
    calculateNetIncome();
  };

  // Function to handle slider release
  const handleSliderRelease = () => {
    setSliderPercentage(0);
  };

  return (
    <div>
      <div>{`${userName}'s net salary calculated`}</div>
      <div>
        <label>User's Name:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
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
      <div>
        <button onClick={() => adjustGrossIncome(-5)}>-5%</button>
        <button onClick={() => adjustGrossIncome(-1)}>-1%</button>
        <button onClick={() => adjustGrossIncome(1)}>+1%</button>
        <button onClick={() => adjustGrossIncome(5)}>+5%</button>
      </div>
      <div>
        <input type="range" min="-100" max="100" value={sliderPercentage} onChange={handleSliderChange} onMouseUp={handleSliderRelease} />
      </div>
      <div>
        <form>
          <label>
            <input type="checkbox" /> Under 25 year old
          </label>
          <br />
          <label>
            <input type="checkbox" /> Recently married
          </label>
          <br />
          <label>
            <input type="checkbox" /> Personal tax cut
          </label>
          <br />
          <label>
            <input type="checkbox" /> Family tax cut
          </label>
        </form>
      </div>
      <div>Your net income: {netIncome}</div>
    </div>
  );
};

export default SalaryCalculator;
