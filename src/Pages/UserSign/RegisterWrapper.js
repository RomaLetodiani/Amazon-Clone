import React from 'react';
import Logo from '../../assets/amazon.png';
import { Link } from 'react-router-dom';

const RegisterWrapper = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center p-5 bg-[#232f3e]">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      {children}
      <div className="text-[#ffffff] text-xs flex gap-5 flex-col items-center justify-center p-5 bg-[#232f3e]">
        <div className=" justify-center flex flex-wrap gap-5">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Your Ads Privacy Choices</p>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default RegisterWrapper;
