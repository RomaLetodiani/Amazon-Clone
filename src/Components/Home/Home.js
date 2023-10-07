import React from 'react';
import { useData } from '../../Contexts/ProductContext';

const Home = () => {
  const { productData } = useData();
  console.log(productData);

  return (
    <div className="bg-[#E3E6E6] text-[#0F1111]">
      <div className="max-w-[1500px] w-full">
        <div className="banner">home</div>
      </div>
    </div>
  );
};

export default Home;
