import React from 'react';
import BottomNav from './BottomNav';
import TopNav from './TopNav';

const Header = () => {
  return (
    <header className="text-[#fff]">
      <TopNav />
      <BottomNav />
    </header>
  );
};

export default Header;
