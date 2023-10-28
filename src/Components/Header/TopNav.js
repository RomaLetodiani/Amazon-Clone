import logo from '../../assets/amazon.png';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useData } from '../../Contexts/ProductContext';
import { BsSearch, BsFillCaretDownFill } from 'react-icons/bs';
import CartDiv from './CartDiv';

const TopNav = () => {
  const { setSelectedValue } = useData();

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
            <CartDiv />
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
