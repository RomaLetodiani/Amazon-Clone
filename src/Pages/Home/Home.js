import React from 'react';
import { useData } from '../../Contexts/ProductContext';
import Banner from './Banner';
import ProductsTop from './ProductsTop';
import ProductSlider from '../../Components/Slider/ProductSlider';
import ProductsBottom from './ProductsBottom';
import AllProductSlider from '../../Components/Slider/AllProductsSlider';

const Home = () => {
  const { productData } = useData();

  return (
    <div className="text-[#0F1111]">
      <Banner />
      <div className="relative mt-[-80px] sm:mt-[-150px] lg:mt-[-250px] xl:mt-[-320px] p-5 ">
        <ProductsTop />
        <ProductSlider
          items={productData.offers}
          sliderTitle={'Exciting Deals'}
        />
        <ProductsBottom />
        <ProductSlider
          items={productData.mostDemandProducts}
          sliderTitle={'Most Demand Products'}
        />
        <AllProductSlider
          items={productData.products}
          sliderTitle={'New Customers Purchased'}
        />
        <ProductSlider
          items={productData.latestProducts}
          sliderTitle={'Latest Products'}
        />
      </div>
    </div>
  );
};

export default Home;
