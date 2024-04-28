import React from 'react';

const FamilyMemberTabs = ({ users, setUsers, setCurrentUser }) => {
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
  const addUser = () => {
    setUsers([...users, new User(users.length + 1, `Member ${users.length + 1}`)]);
  };

  const handleTabClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <ul className='family-member-list'>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleTabClick(user)}>
            {user.userName}
          </li>
        ))}
        <button onClick={addUser}>+</button>
      </ul>
    </div>
  );
};

export default FamilyMemberTabs;
