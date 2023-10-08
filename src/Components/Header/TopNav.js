import { useState } from 'react';
import logo from '../../assets/amazon.png';
import cart from '../../assets/cart.png';
import Search from './Search';

const TopNav = ({ BsSearch, BsFillCaretDownFill }) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <nav className="bg-[#131921] px-5 py-4 ">
      <div className="flex items-center justify-between gap-5">
        <img className="h-8" src={logo} alt="logo" />
        <div className="hidden md:block flex-1 w-full">
          <Search
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            BsSearch={BsSearch}
          />
        </div>
        <div className="flex gap-5 leading-5 items-center">
          <div className="hidden md:block">
            <p className="text-sm">Hello, sign in</p>
            <p className="flex gap-2 items-end font-bold">
              Accounts & Lists
              <BsFillCaretDownFill className="text-[#a7acb2] text-xs mb-1" />
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-sm">Returns</p>
            <p>& Orders</p>
          </div>
          <div className="relative flex items-end">
            <img src={cart} alt="cart" />
            <p className="absolute text-[#f08804] top-[-2px] left-[19px]">0</p>
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Search
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          BsSearch={BsSearch}
        />
      </div>
    </nav>
  );
};

export default TopNav;
