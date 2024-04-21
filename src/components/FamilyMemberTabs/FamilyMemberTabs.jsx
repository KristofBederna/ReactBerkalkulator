import React, { useState } from 'react';

const FamilyMemberTabs = ({ setSelectedUser }) => {
  const [familyMembers, setFamilyMembers] = useState([{ id: 1, name: 'Member 1' }]);

  const handleTabClick = (id) => {
    setSelectedUser(id);
  };

  const handleAddMember = () => {
    const newMemberId = familyMembers.length + 1;
    const newMembers = [...familyMembers, { id: newMemberId, name: `Member ${newMemberId}` }];
    setFamilyMembers(newMembers);
    setSelectedUser(newMemberId);
  };

  return (
    <div>
      {familyMembers.map((member) => (
        <div key={member.id} onClick={() => handleTabClick(member.id)} style={{ cursor: 'pointer' }}>
          {member.name}
        </div>
      ))}
      <button onClick={handleAddMember}>+</button>
    </div>
  );
};

export default FamilyMemberTabs;
