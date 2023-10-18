import Slider from '@mui/material/Slider';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PriceFilter = ({ handlePriceFilter, selectedValue }) => {
  const [value, setValue] = useState([0, 1000]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log('changed');
    setValue([0, 1000]);
  }, [selectedValue]);
  const onCLickPriceFilter = () => {
    handlePriceFilter(value[0], value[1]);
  };
  return (
    <div className="w-11/12 border-t-2 border-[#febd69] mt-5 py-5">
      <p>
        Price: ${value[0]} - ${value[1]}
      </p>
      <Slider
        style={{ color: '#f1a745' }}
        value={value}
        onChange={handleSliderChange}
        min={0}
        max={1000}
        step={10}
      />
      <button
        onClick={onCLickPriceFilter}
        className="bg-[#febd69] shadow-md font-bold text-lg rounded-lg w-full hover:bg-[#f19b2b] text-[#523214] outline-none p-2"
      >
        Filter
      </button>
    </div>
  );
};

export default PriceFilter;
