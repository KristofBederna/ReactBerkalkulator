import React, { useEffect, useState } from 'react';
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = ({ users, setUsers, currentUser, setCurrentUser, updateUser }) => {
  class User {
    constructor(id, userName, netIncome) {
      this.id = id;
      this.userName = userName;
      this.grossIncome = currentUser.grossIncome;
      this.netIncome = netIncome;
      this.sliderPercentage = currentUser.sliderPercentage;
      this.inputValue = currentUser.inputValue;
      this.under25Checked = currentUser.under25Checked;
      this.personalTaxCutChecked = currentUser.personalTaxCutChecked;
      this.recentlyMarriedChecked = currentUser.recentlyMarriedChecked;
      this.eligibilityStatus = currentUser.eligibilityStatus;
      this.familyTaxCutChecked = currentUser.familyTaxCutChecked;
      this.kidsInTheFamily = currentUser.kidsInTheFamily;
      this.kidsWithBenefits = currentUser.kidsWithBenefits;
    }
  }

  const [userName, setUserName] = useState(currentUser.userName);
  const [netIncome, setNetIncome] = useState(currentUser.netIncome);

  useEffect(() => {
    const newUser = new User(currentUser.id, userName, netIncome);
    updateUser(newUser);
  }, [userName, netIncome]);

  return (
    <>
      <header>
        <FamilyMemberTabs users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />
      </header>
      <main>
        <SalaryCalculator users={users} setUsers={setUsers} userName={currentUser.userName} setUserName={setUserName} netIncome={currentUser.netIncome} setNetIncome={setNetIncome} currentUser={currentUser} setCurrentUser={setCurrentUser} updateUser={updateUser} />
        <HouseholdSummary users={users} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
