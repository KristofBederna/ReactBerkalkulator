import React from 'react';

const SliderInput = ({ sliderPercentage, handleSliderChange, handleSliderRelease }) => {
  return (
    <div className='slider'>
      <p>-100%</p>
      <input type="range" min="-100" max="100" value={sliderPercentage} onChange={handleSliderChange} onMouseUp={handleSliderRelease} />
      <p>+100%</p>
    </div>
  );
};

export default SliderInput;
