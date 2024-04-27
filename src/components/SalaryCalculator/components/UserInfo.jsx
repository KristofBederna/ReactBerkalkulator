import React from 'react';

const UserInfo = ({ userName, setUserName }) => {
  return (
    <div>
      <label>User's Name:</label>
      <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
    </div>
  );
};

export default UserInfo;
