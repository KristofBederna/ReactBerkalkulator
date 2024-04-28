import React from 'react';

const HouseholdSummary = ({ users }) => {
  const totalNetIncome = users.reduce((total, user) => total + user.netIncome, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.netIncome}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalNetIncome}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HouseholdSummary;
