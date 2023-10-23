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
        <p className="bg-[#f7f7f7] shadow-xl md:max-w-full max-w-[240px] text-center text-xl rounded-lg p-5 m-auto">
          Sorry, There are currently no products available in this category
        </p>
      )}
    </>
  );
};

export default ItemsSection;
