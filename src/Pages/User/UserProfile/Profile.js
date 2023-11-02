import React from 'react';
import { useUser } from '../../../Contexts/UserContext';
import ErrorPage from '../../Error/ErrorPage';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import RowSliders from '../../../Components/Slider/RowSliders';

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      {user ? (
        <div className="p-5 text-[#344d6b]">
          <div className="bg-[#f7f7f7] mb-5 font-bold shadow-lg rounded-lg p-2">
            <p>
              <Link to="/">Home</Link> /{' '}
              {user.unique_name.length > 10
                ? user.unique_name.slice(0, 10) + '...'
                : user.unique_name}{' '}
              / Profile
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-[#fff] md:max-w-xs font-bold shadow-lg rounded-lg p-5">
              <div className="flex  items-center gap-5">
                <FaUserCircle className="text-5xl min-w-[50px]" />
                <div>
                  <h3 className="text-xl">Hello {user.unique_name}</h3>
                  <p className="text-xs md:text-md max-w-[160px] md:max-w-none">
                    This is your profile page. You can see your information here
                  </p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="text-red-500 ml-[70px]"
              >
                Sign Out
              </button>
            </div>
            <div className="bg-[#fff] leading-8 min-[400px]:leading-10 flex-1 font-bold shadow-lg rounded-lg p-5">
              <div className="flex overflow-x-auto items-center gap-2">
                <h3 className="min-[400px]:text-2xl">Email:</h3>
                <p>{user.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="min-[400px]:text-2xl">Verification:</h4>
                <p>Verified</p>
              </div>
              <div className="flex items-center overflow-x-auto gap-2">
                <h3 className="min-[400px]:text-2xl">Username:</h3>
                <p>{user.unique_name}</p>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="min-[400px]:text-2xl">Role:</h3>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
          <RowSliders />
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Profile;
