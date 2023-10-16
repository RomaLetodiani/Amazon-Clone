import React from 'react';
import { useData } from '../../Contexts/ProductContext';
import ShopItemDiv from './ShopItemDiv';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { productData, selectedValue, setSelectedValue } = useData();

  const ProductsList = productData.products;

  // Filter products based on the selected category
  const filteredProducts = selectedValue
    ? ProductsList.filter((item) => item.category === selectedValue)
    : ProductsList;
  const handleCategoryFilter = (category) => {
    setSelectedValue(category);
  };

  console.log(selectedValue);
  return (
    <div className="p-5 flex max-[400px]:flex-col max-w-5xl m-auto max-[400px]:justify-center items-start">
      <h1 className="text-2xl m-auto mb-5 min-[401px]:hidden text-[#f08804] font-bold">
        {selectedValue ? selectedValue : 'All'}
      </h1>
      <nav className="max-[400px]:hidden min-w-[180px] border-r-2 border-[#febd69]">
        <ul className="flex flex-col gap-3 font-bold">
          {productData.categories.map((item, index) => (
            <li
              className={`${
                selectedValue === item.name && 'text-[#f08804]'
              } hover:text-[#f1a847] cursor-pointer`}
              onClick={() => handleCategoryFilter(item.name)}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      {filteredProducts.length > 0 ? (
        <div className="grid max-[400px]:mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredProducts.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/${item.category}/${item.id}`}>
                <ShopItemDiv item={item} />
              </Link>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="px-5 max-[400px]:py-36 m-auto text-center text-lg">
          Sorry, There are currently no products available in this category
        </p>
      )}
    </div>
  );
};

export default Shop;
