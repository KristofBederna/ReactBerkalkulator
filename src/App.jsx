// In your main React app component
import React, { useState } from 'react';
import FamilyMemberTabs from './components/FamilyMemberTabs/FamilyMemberTabs';
import SalaryCalculator from './components/SalaryCalculator/SalaryCalculator';
import HouseholdSummary from './components/HouseholdSummary/HouseholdSummary';

const App = () => {
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    // Logic to add a new member
    // For example:
    setMembers([...members, 'New Member']);
  };

  return (
    <div>
      <FamilyMemberTabs members={members} onAddMember={handleAddMember} />
      <SalaryCalculator userName="User" />
      <HouseholdSummary members={members} />
    </div>
  );
};

export default App;
