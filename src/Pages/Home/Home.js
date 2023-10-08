import React from 'react';
// import { useData } from '../../Contexts/ProductContext';
import Banner from './Banner';
import ProductsTop from './ProductsTop';

const Home = () => {
  // const { productData } = useData();

  return (
    <div className="bg-[#E3E6E6] text-[#0F1111]">
      <div className="max-w-[1500px] m-auto w-full">
        <Banner />
        <div className="relative mt-[-80px] sm:mt-[-150px] lg:mt-[-250px] xl:mt-[-320px] p-5 ">
          <ProductsTop />
        </div>
      </div>
    </div>
  );
};

export default Home;
