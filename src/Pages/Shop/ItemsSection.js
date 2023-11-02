import React from 'react';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';

const ItemsSection = ({ filteredProducts }) => {
  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="grid overflow-y-auto max-h-[600px] rounded-xl pr-2 max-[420px]:pr-1 max-[400px]:mx-auto min-[610px]:grid-cols-2 min-[800px]:grid-cols-3 lg:grid-cols-4 gap-3">
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
