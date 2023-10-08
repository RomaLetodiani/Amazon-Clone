import React from 'react';
import { ProductsTopImages } from '../../Components/Consts';
import ProductsCard from '../../Components/ProductsCard';
import ProductsCard4x4 from '../../Components/ProductsCard4x4';

const ProductsTop = () => {
  return (
    <div className="hidden md:block">
      {ProductsTopImages.map((products, index) => (
        <div className="mb-5 flex gap-5 justify-around" key={index}>
          {products.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {index === 1 ? (
                <ProductsCard4x4 item={item} />
              ) : (
                <ProductsCard item={item} />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductsTop;
