import React from 'react';

const Input = ({ val, setVal, type, name, placeholder }) => {
  return (
    <input
      className="my-3 pl-3 p-1 text-lg rounded-3xl shadow-sm outline-none border-[#cad7ec] border-2"
      type={type}
      name={name}
      placeholder={placeholder}
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
  );
};

export default Input;
