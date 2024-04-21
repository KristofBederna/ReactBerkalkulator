import React from 'react';

const HouseholdSummary = ({ members }) => {
  return (
    <div>
      <div>Household's summed income:</div>
      <table>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
