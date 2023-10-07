import React from 'react';
import { FooterMobileLis } from '../Consts';

const MobileFooter = () => {
  return (
    <div className="md:hidden p-5 flex gap-10 justify-around leading-10 bg-[#232f3e]">
      {FooterMobileLis.map((li, index) => (
        <ul key={index}>
          {li.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default MobileFooter;
