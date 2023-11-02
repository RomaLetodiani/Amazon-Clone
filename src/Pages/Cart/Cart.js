import React, { useEffect } from 'react';
import CartItem from './CartItem';
import SubTotalDiv from './SubTotalDiv';
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../Redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import RowSliders from '../../Components/Slider/RowSliders';
import { useUser } from '../../Contexts/UserContext';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { user } = useUser();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart.items]);

  return (
    <div className="p-5 ">
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="bg-[#fff] rounded-md flex-1 p-5">
          {cart.items.length > 0 ? (
            <>
              <h2 className="text-3xl border-b font-bold pb-5">
                Shopping Cart
              </h2>
              <div>
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <h3 className="text-xl pt-5 text-right">
                Subtotal ({cart.totalAmount} items):
                <span className="font-bold"> ${cart.cartTotal.toFixed(2)}</span>
              </h3>
            </>
          ) : (
            <div className="flex gap-5 flex-col items-center sm:items-start sm:flex-row">
              <img
                className="max-w-[200px]"
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="Empty Cart"
              />
              <div>
                <h2 className="font-bold text-2xl">Your Cart is Empty</h2>
                <Link to="/shop">
                  <p className="text-[#007185] text-sm mb-5">
                    Shop Today's Deals
                  </p>
                </Link>
                <div className="flex gap-5 flex-col sm:flex-row">
                  {!user ? (
                    <>
                      <Link to="/sign-in">
                        <button className="bg-[#FFD814] border shadow-md rounded-lg px-3 py-1 hover:bg-[#F7CA00] text-[#232f3e] outline-none">
                          Sign in to your account
                        </button>
                      </Link>
                      <Link to="/sign-up">
                        <button className="bg-[#FFF] border shadow-md rounded-lg px-3 py-1 hover:bg-[#F7FAFA] text-[#232f3e] outline-none">
                          Sign up now
                        </button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/profile">
                      <button className="bg-[#FFF] border shadow-md rounded-lg px-3 py-1 hover:bg-[#F7FAFA] text-[#232f3e] outline-none">
                        view your Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {cart.items.length > 0 && <SubTotalDiv cart={cart} />}
      </div>
      <RowSliders />
    </div>
  );
};

export default Cart;
