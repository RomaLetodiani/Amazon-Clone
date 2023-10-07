import React from 'react';
import { BsList, BsSearch, BsFillCaretDownFill } from 'react-icons/bs';
import BottomNav from './BottomNav';
import TopNav from './TopNav';

const Header = () => {
  return (
    <header className="text-[#fff]">
      <TopNav BsSearch={BsSearch} BsFillCaretDownFill={BsFillCaretDownFill} />
      <BottomNav BsList={BsList} />
    </header>
  );
};

export default Header;
