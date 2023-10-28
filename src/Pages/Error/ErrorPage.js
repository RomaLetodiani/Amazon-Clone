import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        <h1>Sorry</h1>
        <h2>We couldn't find that page</h2>
        <h3>
          Try searching or go to <span>Amazon's home page</span>
        </h3>
      </Link>
    </div>
  );
};

export default ErrorPage;
