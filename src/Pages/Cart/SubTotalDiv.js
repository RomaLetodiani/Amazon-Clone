import React from 'react';

const SubTotalDiv = ({ cart }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="bg-[#fff] md:w-64 md:self-start sticky top-0 rounded-md flex flex-col p-5">
      <h3>
        Subtotal ({cart.totalAmount} items):
        <span className="font-bold"> ${cart.cartTotal.toFixed(2)}</span>
      </h3>
      <div className="flex items-center gap-2 mb-5">
        <input id="gift" type="checkbox" />
        <label className="text-sm" htmlFor="gift">
          This order contains a gift
        </label>
      </div>
      <button
        onClick={submitHandler}
        className="bg-[#FFD814] rounded-lg p-2 hover:bg-[#f3a847] text-[#232f3e] outline-none"
      >
        Proceed to Checkout
      </button>
    </form>
  );
};

export default SubTotalDiv;
