import React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import BackToTop from './BackToTop';
import MobileFooter from './MobileFooter';

const Footer = () => {
  return (
    <footer className="text-[#fff]">
      <BackToTop />
      <MobileFooter />
      <Top />
      <Bottom />
    </footer>
  );
};

export default Footer;
