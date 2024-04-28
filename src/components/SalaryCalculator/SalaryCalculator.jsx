import React, { useState, useEffect } from 'react';
import UserInfo from './components/UserInfo';
import GrossIncomeInput from './components/GrossIncomeInput';
import SliderInput from './components/SliderInput';
import CheckboxForm from './components/CheckboxForm';
import ButtonGroup from './components/PrecentileButtons';

const SalaryCalculator = ({ userName, setUserName, netIncome, setNetIncome, currentUser, updateUser }) => {
  class User {
    constructor(id, userName, grossIncome, sliderPercentage, inputValue, under25Checked, personalTaxCutChecked, recentlyMarriedChecked, eligibilityStatus, familyTaxCutChecked, kidsInTheFamily, kidsWithBenefits) {
      this.id = id;
      this.userName = userName;
      this.grossIncome = grossIncome;
      this.netIncome = currentUser.netIncome;
      this.sliderPercentage = sliderPercentage;
      this.inputValue = inputValue;
      this.under25Checked = under25Checked;
      this.personalTaxCutChecked = personalTaxCutChecked;
      this.recentlyMarriedChecked = recentlyMarriedChecked;
      this.eligibilityStatus = eligibilityStatus;
      this.familyTaxCutChecked = familyTaxCutChecked;
      this.kidsInTheFamily = kidsInTheFamily;
      this.kidsWithBenefits = kidsWithBenefits;
    }
  }

  const [grossIncome, setGrossIncome] = useState(currentUser.grossIncome);
  const [sliderPercentage, setSliderPercentage] = useState(currentUser.sliderPercentage);
  const [inputValue, setInputValue] = useState(currentUser.inputValue);
  const [under25Checked, setUnder25Checked] = useState(currentUser.under25Checked);
  const [personalTaxCutChecked, setPersonalTaxCutChecked] = useState(currentUser.personalTaxCutChecked);
  const [recentlyMarriedChecked, setRecentlyMarriedChecked] = useState(currentUser.recentlyMarriedChecked);
  const [eligibilityStatus, setEligibilityStatus] = useState(currentUser.eligibilityStatus);
  const [familyTaxCutChecked, setFamilyTaxCutChecked] = useState(currentUser.familyTaxCutChecked !== undefined ? currentUser.familyTaxCutChecked : false);
  const [kidsInTheFamily, setKidsInTheFamily] = useState(currentUser.kidsInTheFamily !== undefined ? currentUser.kidsInTheFamily : 0);
  const [kidsWithBenefits, setkidsWithBenefits] = useState(currentUser.kidsWithBenefits !== undefined ? currentUser.kidsWithBenefits : 0);

  // Function to calculate net income
  const calculateNetIncome = () => {
    let calculatedNetIncome = 0;

    // Calculate gross income components
    let tbTax = grossIncome * 0.185; // TB tax
    let szjaTax = grossIncome * 0.15; // SZJA tax
    let taxes = tbTax + szjaTax;
    let netIncomeFromGross = grossIncome - taxes;
    calculatedNetIncome = netIncomeFromGross;

    // Example net income calculation logic
    if (under25Checked && (grossIncome <= 499952)) {
      calculatedNetIncome += szjaTax;
      taxes -= szjaTax;
      szjaTax = 0;
    }
    else if (under25Checked && (grossIncome > 499952)) {
      calculatedNetIncome += szjaTax;
      taxes -= szjaTax;
      szjaTax = (grossIncome - 499952) * 0.15;
      taxes += szjaTax;
      calculatedNetIncome -= szjaTax;
    }
    if (personalTaxCutChecked) {
      if (taxes > 77300) {
        calculatedNetIncome += 77300;
        taxes -= 77300;
      } else {
        calculatedNetIncome += taxes;
        taxes = 0;
      }
    }
    if (recentlyMarriedChecked && eligibilityStatus === "Eligible") {
      calculatedNetIncome += 5000;
    }
    if (familyTaxCutChecked) {
      switch (kidsWithBenefits) {
        case 0:
          break;
        case 1:
          calculatedNetIncome += Math.min(10000 * kidsInTheFamily, taxes);
          taxes -= Math.min(10000 * kidsInTheFamily, taxes);
          break;
        case 2:
          calculatedNetIncome += Math.min(20000 * kidsInTheFamily, taxes);
          taxes -= Math.min(20000 * kidsInTheFamily, taxes);
          break;
        default:
          calculatedNetIncome += Math.min(33000 * kidsInTheFamily, taxes);
          taxes -= Math.min(33000 * kidsInTheFamily, taxes);
          break;
      }
    }
    if (!under25Checked && !personalTaxCutChecked && !recentlyMarriedChecked && !familyTaxCutChecked) {
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
  }, [grossIncome, under25Checked, personalTaxCutChecked, recentlyMarriedChecked, eligibilityStatus, familyTaxCutChecked, kidsInTheFamily, kidsWithBenefits]);

  useEffect(() => {
    const newUser = new User(currentUser.id, userName, grossIncome, sliderPercentage, inputValue, under25Checked, personalTaxCutChecked, recentlyMarriedChecked, eligibilityStatus, familyTaxCutChecked, kidsInTheFamily, kidsWithBenefits)
    updateUser(newUser);
  }, [grossIncome, sliderPercentage, inputValue, under25Checked, personalTaxCutChecked, recentlyMarriedChecked, eligibilityStatus, familyTaxCutChecked, kidsInTheFamily, kidsWithBenefits]);

  useEffect(() => {
    setUserName(userName);
    setGrossIncome(currentUser.grossIncome);
    setSliderPercentage(currentUser.sliderPercentage);
    setInputValue(currentUser.inputValue);
    setUnder25Checked(currentUser.under25Checked);
    setPersonalTaxCutChecked(currentUser.personalTaxCutChecked);
    setRecentlyMarriedChecked(currentUser.recentlyMarriedChecked);
    setEligibilityStatus(currentUser.eligibilityStatus);
    setFamilyTaxCutChecked(currentUser.familyTaxCutChecked !== undefined ? currentUser.familyTaxCutChecked : false);
    setKidsInTheFamily(currentUser.kidsInTheFamily !== undefined ? currentUser.kidsInTheFamily : 0);
    setkidsWithBenefits(currentUser.kidsWithBenefits !== undefined ? currentUser.kidsWithBenefits : 0);
  }, [currentUser]);

  return (
    <div>
      <div>{`${userName}'s net salary calculated`}</div>
      <UserInfo userName={userName} setUserName={setUserName} />
      <GrossIncomeInput grossIncome={grossIncome} setGrossIncome={setGrossIncome} setInputValue={setInputValue} calculateNetIncome={calculateNetIncome} />
      <SliderInput sliderPercentage={sliderPercentage} handleSliderChange={handleSliderChange} handleSliderRelease={handleSliderRelease} />
      <ButtonGroup adjustGrossIncome={adjustGrossIncome} />
      <CheckboxForm currentUser={currentUser} setUnder25Checked={setUnder25Checked} setPersonalTaxCutChecked={setPersonalTaxCutChecked} recentlyMarried={recentlyMarriedChecked} setRecentlyMarriedChecked={setRecentlyMarriedChecked} eligibilityStatus={eligibilityStatus} setEligibilityStatus={setEligibilityStatus} familyTaxCutChecked={familyTaxCutChecked} setFamilyTaxCutChecked={setFamilyTaxCutChecked} kidsInTheFamily={kidsInTheFamily} setKidsInTheFamily={setKidsInTheFamily} kidsWithBenefits={kidsWithBenefits} setkidsWithBenefits={setkidsWithBenefits} />
      <div>Your net income: {netIncome}</div>
    </div>
  );
};

export default SalaryCalculator;
