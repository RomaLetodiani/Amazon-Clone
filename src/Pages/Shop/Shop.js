import React from 'react';
import { useData } from '../../Contexts/ProductContext';
import CategoryBar from './CategoryBar';
import ItemsSection from './ItemsSection';
import { useEffect } from 'react';
import { useState } from 'react';

const Shop = () => {
  const { productData, selectedValue, setSelectedValue } = useData();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const ProductsList = productData.products;
  // Filter products based on the selected category
  useEffect(() => {
    setFilteredProducts(
      selectedValue
        ? ProductsList.filter((item) => item.categoryId === selectedValue.id)
        : ProductsList
    );
  }, [ProductsList, selectedValue]);

  const handleCategoryFilter = (category) => {
    setSelectedValue(category);
  };

  const handlePriceFilter = (val1, val2) => {
    const filteredItemsByPrice = selectedValue
      ? ProductsList.filter(
          (item) =>
            item.categoryId === selectedValue.id &&
            item.price >= val1 &&
            item.price <= val2
        )
      : ProductsList.filter((item) => item.price >= val1 && item.price <= val2);

    setFilteredProducts(filteredItemsByPrice);
  };
  return (
    <div className="p-5 flex max-[400px]:flex-col max-w-5xl m-auto max-[400px]:justify-center items-start">
      <h1 className="text-xl m-auto mb-5 min-[401px]:hidden text-[#f08804] font-bold">
        {selectedValue ? selectedValue.name : 'All'}
      </h1>
      <CategoryBar
        handlePriceFilter={handlePriceFilter}
        productData={productData}
        selectedValue={selectedValue}
        handleCategoryFilter={handleCategoryFilter}
      />
      <ItemsSection filteredProducts={filteredProducts} />
    </div>
  );
};

export default Shop;
