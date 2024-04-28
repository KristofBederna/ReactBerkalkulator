import React from 'react';

const EligibilityStatus = ({ dateOfMarriage }) => {
  const isEligible = () => {
    const today = new Date();
    const marriageDate = new Date(dateOfMarriage);
    const twoYearsAgo = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());

    return marriageDate >= twoYearsAgo ? 'eligible' : 'not eligible';
  };

  return (
    <div>
      <p>
        <strong>{isEligible()}</strong>
      </p>
    </div>
  );
};

export default EligibilityStatus;
