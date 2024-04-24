import React, { useState, useEffect } from 'react';
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
  const [under25Checked, setUnder25Checked] = useState(false);
  const [personalTaxCutChecked, setPersonalTaxCutChecked] = useState(false);
  const [recentlyMarriedChecked, setRecentlyMarriedChecked] = useState(false);
  const [eligibilityStatus, setEligibilityStatus] = useState("");

  // Function to calculate net income
  const calculateNetIncome = () => {
    let calculatedNetIncome = 0;

    // Calculate gross income components
    let tbTax = grossIncome * 0.185; // TB tax
    let szjaTax = grossIncome * 0.15; // SZJA tax
    let netIncomeFromGross = grossIncome - tbTax - szjaTax;
    calculatedNetIncome = netIncomeFromGross;

    // Example net income calculation logic
    if (under25Checked && (grossIncome <= 499952)) {
      calculatedNetIncome += szjaTax;
      szjaTax = 0;
    }
    else if (under25Checked && (grossIncome > 499952)) {
      calculatedNetIncome += szjaTax;
      szjaTax = (grossIncome - 499952) * 0.15;
      calculatedNetIncome -= szjaTax;
    }
    if (personalTaxCutChecked) {
      if (tbTax + szjaTax > 77300) {
        calculatedNetIncome += 77300;
      } else {
        calculatedNetIncome += tbTax + szjaTax;
      }
    }
    if (recentlyMarriedChecked && eligibilityStatus === "Eligible") {
      calculatedNetIncome += 5000;
    }
    if (!under25Checked && !personalTaxCutChecked && !recentlyMarriedChecked) {
      calculatedNetIncome = netIncomeFromGross;
    }
    setNetIncome(calculatedNetIncome);
  };

  // Function to handle slider change
  const handleSliderChange = (e) => {
    const sliderValue = parseFloat(e.target.value);
    setSliderPercentage(sliderValue);
    const newGrossIncome = inputValue + (inputValue * sliderValue / 100);
    setGrossIncome(newGrossIncome);
  };

  // Function to handle slider release
  const handleSliderRelease = () => {
    setSliderPercentage(0);
    setInputValue(grossIncome);
    calculateNetIncome();
  };

  // Function to adjust gross income
  const adjustGrossIncome = (percentChange) => {
    const newGrossIncome = inputValue * (1 + percentChange / 100);
    setGrossIncome(newGrossIncome);
    setInputValue(newGrossIncome);
  };

  useEffect(() => {
    calculateNetIncome();
  }, [grossIncome, under25Checked, personalTaxCutChecked, recentlyMarriedChecked]);

  return (
    <div>
      <div>{`${userName}'s net salary calculated`}</div>
      <UserInfo userName={userName} setUserName={setUserName} />
      <GrossIncomeInput grossIncome={grossIncome} setGrossIncome={setGrossIncome} setInputValue={setInputValue} calculateNetIncome={calculateNetIncome} />
      <SliderInput sliderPercentage={sliderPercentage} handleSliderChange={handleSliderChange} handleSliderRelease={handleSliderRelease} />
      <ButtonGroup adjustGrossIncome={adjustGrossIncome} />
      <CheckboxForm setUnder25Checked={setUnder25Checked} setPersonalTaxCutChecked={setPersonalTaxCutChecked} recentlyMarried={recentlyMarriedChecked} setRecentlyMarriedChecked={setRecentlyMarriedChecked} setEligibilityStatus={setEligibilityStatus} />
      <div>Your net income: {netIncome}</div>
    </div>
  );
};

export default SalaryCalculator;
