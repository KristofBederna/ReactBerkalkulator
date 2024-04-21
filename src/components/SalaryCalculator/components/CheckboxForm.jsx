import React from 'react';

const CheckboxForm = () => {
  return (
    <div>
      <form>
        <label>
          <input type="checkbox" /> Under 25 year old
        </label>
        <br />
        <label>
          <input type="checkbox" /> Recently married
        </label>
        <br />
        <label>
          <input type="checkbox" /> Personal tax cut
        </label>
        <br />
        <label>
          <input type="checkbox" /> Family tax cut
        </label>
      </form>
    </div>
  );
};

export default CheckboxForm;
