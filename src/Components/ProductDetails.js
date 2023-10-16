import React from 'react';
import { useData } from '../Contexts/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  const { productData } = useData();
  const allProducts = [
    ...productData.offers,
    ...productData.products,
    ...productData.latestProducts,
    ...productData.mostDemandProducts,
  ];

  const uniqProducts = allProducts.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  console.log(uniqProducts);

  const product = uniqProducts.find((item) => item.id === id);

  return (
    <div className="p-5 flex justify-center items-center">
      {product ? <div>{product.name}</div> : <h3>no item</h3>}
    </div>
  );
};

export default ProductDetails;
