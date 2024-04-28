import React from 'react';

const UserInfo = ({ userName, setUserName }) => {
  return (
    <div className='user-info'>
      <label>Username:</label>
      <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
    </div>
  );
};

export default UserInfo;
