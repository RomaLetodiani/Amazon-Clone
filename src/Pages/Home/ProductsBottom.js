import React from 'react';
import { ProductsBottomImages } from '../../Components/Consts';
import ProductsCard from '../../Components/ProductsCard';

const ProductsBottom = () => {
  return (
    <div className="flex overflow-x-auto scroll-mx-px my-2 py-1 gap-5">
      {ProductsBottomImages.map((item) => (
        <ProductsCard minW={true} key={item.title} item={item} />
      ))}
    </div>
  );
};

export default ProductsBottom;
