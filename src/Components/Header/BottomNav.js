import React from 'react';
import { HeaderLi } from '../Consts';

const BottomNav = ({ BsList }) => {
  return (
    <div className="flex items-center overflow-auto bg-[#232f3e] px-5 py-2">
      <button className="text-3xl">
        <BsList />
      </button>
      <ul className="flex gap-4 items-center text-center">
        {HeaderLi.map((item, index) => (
          <li className="cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNav;
