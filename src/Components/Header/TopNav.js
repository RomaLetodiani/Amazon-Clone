import logo from '../../assets/amazon.png';
import cart from '../../assets/cart.png';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useData } from '../../Contexts/ProductContext';

const TopNav = ({ BsSearch, BsFillCaretDownFill }) => {
  const { setSelectedValue } = useData();

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <nav className="bg-[#131921] px-5 py-4 ">
      <div className="flex items-center justify-between gap-5">
        <Link to="/">
          <img className="h-8" src={logo} alt="logo" />
        </Link>
        <div className="hidden md:block flex-1 w-full">
          <Search setSelectedValue={setSelectedValue} BsSearch={BsSearch} />
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
          <Link to="/cart">
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
          </Link>
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Search setSelectedValue={setSelectedValue} BsSearch={BsSearch} />
      </div>
    </nav>
  );
};

export default TopNav;
