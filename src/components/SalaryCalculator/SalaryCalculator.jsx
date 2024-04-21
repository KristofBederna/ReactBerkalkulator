import React, { useState } from 'react';
import UserInfo from './components/UserInfo';
import GrossIncomeInput from './components/GrossIncomeInput';
import SliderInput from './components/SliderInput';
import CheckboxForm from './components/CheckboxForm';
import ButtonGroup from './components/PrecentileButtons';

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

  // Function to handle slider change
  const handleSliderChange = (e) => {
    const sliderValue = parseFloat(e.target.value);
    setSliderPercentage(sliderValue);
    const newGrossIncome = inputValue + (inputValue * sliderValue / 100);
    setGrossIncome(newGrossIncome);
    calculateNetIncome();
  };

  // Function to handle slider release
  const handleSliderRelease = () => {
    setSliderPercentage(0);
    setInputValue(grossIncome);
  };

  // Function to adjust gross income
  const adjustGrossIncome = (percentChange) => {
    const newGrossIncome = inputValue * (1 + percentChange / 100);
    setGrossIncome(newGrossIncome);
    setInputValue(newGrossIncome);
    calculateNetIncome();
  };

  return (
    <div>
      <div>{`${userName}'s net salary calculated`}</div>
      <UserInfo userName={userName} setUserName={setUserName} />
      <GrossIncomeInput grossIncome={grossIncome} setGrossIncome={setGrossIncome} setInputValue={setInputValue} calculateNetIncome={calculateNetIncome} />
      <SliderInput sliderPercentage={sliderPercentage} handleSliderChange={handleSliderChange} handleSliderRelease={handleSliderRelease} />
      <ButtonGroup adjustGrossIncome={adjustGrossIncome} />
      <CheckboxForm />
      <div>Your net income: {netIncome}</div>
    </div>
  );
};

export default SalaryCalculator;
