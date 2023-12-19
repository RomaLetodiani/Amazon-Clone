import logo from '../../assets/amazon.png';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useData } from '../../Contexts/ProductContext';
import { BsSearch, BsPerson } from 'react-icons/bs';
import CartDiv from './CartDiv';
import { useUser } from '../../Contexts/UserContext';

const TopNav = () => {
  const { setSelectedValue } = useData();
  const { user } = useUser();

  console.log(user);

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
            <Link to={`${user ? '/profile' : '/sign-in'}`}>
              <p className="text-sm">
                Hello,{' '}
                {user
                  ? user.unique_name.length > 10
                    ? user.unique_name.slice(0, 10) + '...'
                    : user.unique_name
                  : 'Sign In'}
              </p>
              <p className="flex gap-2 items-end font-bold">Accounts & Lists</p>
            </Link>
          </div>

          <div className="hidden md:block">
            <p className="text-sm">Returns</p>
            <p>& Orders</p>
          </div>

          <div className="flex items-center gap-1 md:gap-0">
            <Link to={`${user ? '/profile' : '/sign-in'}`}>
              <div className="flex gap-2 md:hidden items-center">
                <p className="text-[#ffffff] max-[350px]:hidden text-sm">
                  {user
                    ? user.unique_name.length > 5
                      ? user.unique_name.slice(0, 5) + '...'
                      : user.unique_name
                    : 'Sign In >'}
                </p>
                <BsPerson className="text-[#ffffff] text-3xl" />
              </div>
            </Link>
            <Link to="/cart">
              <CartDiv />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Search setSelectedValue={setSelectedValue} BsSearch={BsSearch} />
      </div>
    </nav>
  );
};

export default TopNav;
