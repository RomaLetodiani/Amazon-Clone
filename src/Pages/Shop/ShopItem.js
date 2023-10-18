import React from 'react';

const ShopItem = ({ item }) => {
  return (
    <div className="text-[#0F1111] rounded-xl shadow-lg bg-[#fff] p-3 min-h-[272px] max-w-[180px] max-h-[300px]">
      <img
        className="m-auto max-w-[140px] max-h-[180px] cover object-center aspect-square"
        src={item.images[0]}
        alt={item.name}
      />
      <h3 className="mt-5 text-center line-clamp-4 text-xs">{item.name}</h3>
      <p className="text-center font-bold">${item.price}</p>
    </div>
  );
};

export default ShopItem;
