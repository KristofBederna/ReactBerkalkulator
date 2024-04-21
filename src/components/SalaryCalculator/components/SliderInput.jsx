import React from 'react';

const SliderInput = ({ sliderPercentage, handleSliderChange, handleSliderRelease }) => {
  return (
    <div>
      <input type="range" min="-100" max="100" value={sliderPercentage} onChange={handleSliderChange} onMouseUp={handleSliderRelease} />
    </div>
  );
};

export default SliderInput;
