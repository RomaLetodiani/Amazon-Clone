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
      'https://amazon-digital-prod.azurewebsites.net/api/product/products',
      'https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts',
      'https://amazon-digital-prod.azurewebsites.net/api/product/offers',
      'https://amazon-digital-prod.azurewebsites.net/api/product/latestproducts',
      'https://amazon-digital-prod.azurewebsites.net/api/product/categories',
    ];
    Promise.all(endpointURLs.map((url) => axios.get(url)))
      .then((responses) => {
        const categoriesData = responses[4].data.reduce(
          (categoriesDict, category) => {
            categoriesDict[category.id] = category;
            return categoriesDict;
          },
          {}
        );

        // Associate products with their categories based on categoryId
        const productsWithCategories = responses[0].data.map((product) => ({
          ...product,
          category: categoriesData[product.categoryId].name,
        }));

        const newData = {
          products: productsWithCategories,
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
