import React from 'react';

const EligibilityStatus = ({ eligibilityStatus }) => {

  return (
    <div>
      <p>
        <strong>{eligibilityStatus}</strong>
      </p>
    </div>
  );
};

export default EligibilityStatus;
