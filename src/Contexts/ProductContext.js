import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();
export const useData = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    products: [],
    mostDemandProducts: [],
    offers: [],
    latestProducts: [],
    categories: [],
  });

  useEffect(() => {
    const endpointURLs = [
      'https://amazon-digital-prod.azurewebsites.net/api/product/products',
      'https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts',
      'https://amazon-digital-prod.azurewebsites.net/api/product/offers',
      'https://amazon-digital-prod.azurewebsites.net/api/product/latestproducts',
      'https://amazon-digital-prod.azurewebsites.net/api/product/categories',
    ];
    Promise.all(endpointURLs.map((url) => axios.get(url)))
      .then((responses) => {
        const newData = {
          products: responses[0].data,
          mostDemandProducts: responses[1].data,
          offers: responses[2].data,
          latestProducts: responses[3].data,
          categories: responses[4].data,
        };
        setProductData(newData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const contextValues = {
    productData,
    setProductData,
  };
  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
