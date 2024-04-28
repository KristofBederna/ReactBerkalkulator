import React, { useState } from 'react';
import './index.css';
import HouseholdSalaryCalculator from './components/HouseholdSalaryCalculator';

const App = () => {
  class User {
    constructor(id, userName) {
      this.id = id;
      this.userName = userName;
      this.grossIncome = 0;
      this.netIncome = 0;
      this.sliderPercentage = 0;
      this.inputValue = 0;
      this.taxes = 0;
      this.under25Checked = false;
      this.personalTaxCutChecked = false;
      this.recentlyMarriedChecked = false;
      this.eligibilityStatus = "";
      this.familyTaxCutChecked = false;
      this.kidsInTheFamily = 0;
      this.kidsWithBenefits = 0;
    }
  }

  const firstUser = new User(1, "Member 1");
  const [users, setUsers] = useState([firstUser]);
  const [currentUser, setCurrentUser] = useState(users[0]);

  const updateUser = (user) => {
    setCurrentUser(user);
    let newUsers = new Array;
    for (let i = 0; i < user.id - 1; i++) {
      newUsers.push(users[i]);
    }
    newUsers.push(user);
    for (let i = user.id; i < users.length; i++) {
      newUsers.push(users[i]);
    }
    setUsers(newUsers);
  }

  return (
    <div>
      <HouseholdSalaryCalculator users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} updateUser={updateUser} />
    </div>
  );
};

export default App;
