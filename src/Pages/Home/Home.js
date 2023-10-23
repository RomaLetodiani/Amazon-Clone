import React from 'react';
import { useData } from '../../Contexts/ProductContext';
import Banner from './Banner';
import ProductsTop from './ProductsTop';
import ProductSlider from '../../Components/Slider/ProductSlider';
import ProductsBottom from './ProductsBottom';
import AllProductSlider from '../../Components/Slider/AllProductsSlider';

const Home = () => {
  const { productData } = useData();

  const renderProductSlider = (items, sliderTitle, sliderId) => (
    <ProductSlider id={sliderId} items={items} sliderTitle={sliderTitle} />
  );

  return (
    <div className="text-[#0F1111]">
      <Banner />
      <div className="relative mt-[-80px] sm:mt-[-150px] lg:mt-[-250px] xl:mt-[-320px] p-5 ">
        <ProductsTop />
        {renderProductSlider(productData.offers, 'Exciting Deals', 'offers')}
        <ProductsBottom />
        {renderProductSlider(
          productData.mostDemandProducts,
          'Most Demand Products',
          'demand'
        )}
        <AllProductSlider
          items={productData.products}
          sliderTitle={'New Customers Purchased'}
        />
        {renderProductSlider(
          productData.latestProducts,
          'Latest Products',
          'latest'
        )}
      </div>
    </div>
  );
};

export default Home;
