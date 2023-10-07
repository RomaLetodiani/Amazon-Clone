import React from 'react';
import { FooterTopLis } from '../Consts';

const Top = () => {
  return (
    <div className="bg-[#232f3e] hidden md:block w-full">
      <div className="max-w-5xl w-full m-auto flex justify-between gap-10 px-5 py-10">
        {FooterTopLis.map((item, index) => (
          <div key={index}>
            <p className="font-bold text-lg">{item.title}</p>
            <ul>
              {item.list.map((li, index) => (
                <li key={index} className="text-[#DDD] text-sm leading-7">
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
