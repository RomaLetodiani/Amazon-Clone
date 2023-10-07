import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className="text-center cursor-pointer text-sm p-3 bg-[#37475A] hover:bg-[#485769]"
    >
      Back to top
    </div>
  );
};

export default BackToTop;
