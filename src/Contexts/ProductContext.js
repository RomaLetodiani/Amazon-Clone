import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();
export const useData = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');

  const [productData, setProductData] = useState({
    products: [],
    mostDemandProducts: [],
    offers: [],
    latestProducts: [],
    categories: [],
  });

  useEffect(() => {
    const endpointURLs = [
      'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products',
      'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/mostdemandproducts',
      'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/offers',
      'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/latestproducts',
      'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/categories',
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
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const contextValues = {
    productData,
    loading,
    selectedValue,
    setSelectedValue,
  };
  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
