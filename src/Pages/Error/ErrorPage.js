import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="m-auto max-[500px]:max-w-[240px] text-[#375272] flex justify-center items-center py-40">
      <Link to="/">
        <h1 className="text-7xl min-[501px]:text-9xl  font-bold tracking-widest">
          Sorry
        </h1>
        <h2 className="mt-2 text-4xl">We couldn't find that page</h2>
        <h3 className="text-xl">
          Try searching or go to
          <span className="text-[#4482ce]"> Amazon's home page</span>
        </h3>
      </Link>
    </div>
  );
};

export default ErrorPage;
