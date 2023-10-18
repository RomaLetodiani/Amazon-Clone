import React from 'react';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';

const ItemsSection = ({ filteredProducts }) => {
  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="grid max-[400px]:mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredProducts.map((item) => {
            return (
              <Link to={`/shop/${item.categoryId}/${item.id}`} key={item.id}>
                <ShopItem item={item} />
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="bg-[#f8f8f8] rounded-lg shadow-lg p-5 max-[400px]:py-36 m-auto text-center text-lg">
          Sorry, There are currently no products available in this category
        </p>
      )}
    </>
  );
};

export default ItemsSection;
