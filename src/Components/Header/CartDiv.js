import React from 'react';
import cart from '../../assets/cart.png';
import { useSelector } from 'react-redux';

const CartDiv = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="relative flex items-end">
      <img src={cart} alt="cart" />
      <p
        className={`absolute text-[#f08804] top-[-2px] 
                ${
                  totalAmount > 99
                    ? 'left-[14px] top-[0px] text-xs'
                    : totalAmount > 9
                    ? 'left-[15px] text-sm'
                    : 'left-[19px] text-sm'
                }`}
      >
        {totalAmount > 99 ? '99+' : totalAmount}
      </p>
      <p>Cart</p>
    </div>
  );
};

export default CartDiv;
