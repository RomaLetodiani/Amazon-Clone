import React from 'react';
import { HeaderLi } from '../Consts';
import { Link } from 'react-router-dom';

const BottomNav = ({ BsList }) => {
  return (
    <div className="flex items-center overflow-auto bg-[#232f3e] px-5 py-2">
      <button className="text-3xl">
        <BsList />
      </button>
      <ul className="flex gap-4 items-center text-center">
        {HeaderLi.map((item, index) => (
          <li className="cursor-pointer" key={index}>
            <Link to={item.url} target={item.url.length > 10 ? '_blank' : ''}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNav;
