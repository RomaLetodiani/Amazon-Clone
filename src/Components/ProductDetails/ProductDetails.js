import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../../Contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();

  const { productData } = useData();
  const allProducts = [
    ...productData.products,
    ...productData.latestProducts,
    ...productData.mostDemandProducts,
  ];

  const uniqProducts = allProducts.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  const product = uniqProducts.find((item) => item.id === id);

  console.log(product);

  return (
    <div className="p-5 flex justify-center items-center">
      {product ? (
        <div className="bg-[#fff] flex justify-center gap-5 flex-col md:flex-row rounded-md flex-1 p-5">
          <div className="md:max-w-[500px] max-w-[300px] min-w-[220px]">
            <img
              className="w-full"
              alt={product.name}
              src={product.image || product.images[0]}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p>{product.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Price: ${product.price}</h3>
          </div>
        </div>
      ) : (
        <div className="bg-[#f7f7f7] shadow-xl md:max-w-full max-w-[240px] text-center text-xl rounded-lg p-5 my-32">
          <h3>no item has been found on this Link, Please try another one</h3>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
