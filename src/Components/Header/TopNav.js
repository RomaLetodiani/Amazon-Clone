import React from 'react';
import logo from '../../assets/amazon.png';
import cart from '../../assets/cart.png';

const TopNav = ({ BsSearch, BsFillCaretDownFill }) => {
  return (
    <nav className="bg-[#131921] px-5 py-2 flex items-center justify-between gap-5">
      <img className="h-8" src={logo} alt="logo" />
      <form
        id="SearchBar"
        className="text-[#0F1111] flex flex-1 p-1 overflow-hidden rounded-2xl"
      >
        <select
          className=" bg-[#e6e6e6] p-1 w-[50px] outline-none"
          name="Categories"
        >
          <option>All Departments</option>
          <option>Arts</option>
          <option>Baby</option>
          <option>Automotives</option>
        </select>
        <input
          className="w-full outline-none border-x  border-[#000] px-5"
          name="Search"
          placeholder="Search Amazon"
        />
        <button
          className="bg-[#febd69] hover:bg-[#f3a847] text-[#232f3e] outline-none p-3"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
      <div className="flex gap-5 leading-5 items-center">
        <div>
          <p className="text-sm">Hello, sign in</p>
          <p className="flex gap-2 items-end font-bold">
            Accounts & Lists{' '}
            <BsFillCaretDownFill className="text-[#a7acb2] text-xs mb-1" />
          </p>
        </div>
        <div>
          <p className="text-sm">Returns</p>
          <p>& Orders</p>
        </div>
        <div className="relative flex items-end">
          <img src={cart} alt="cart" />
          <p className="absolute text-[#f08804] top-[-2px] left-[19px]">0</p>
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
