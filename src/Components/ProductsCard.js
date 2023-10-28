import React from 'react';

const ProductsCard = ({ item, minW }) => {
  return (
    <div
      className={`${
        minW ? 'min-w-[240px]' : 'min-w-[200px]'
      }  w-[33%] rounded-xl p-[clamp(8px,2vw,25px)] bg-[#fff]`}
    >
      <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
      <img
        className="my-5 min-w-[150px] w-full"
        src={item.img}
        alt={item.title}
      />
      <p className="text-xs text-[#007185]">{item.text}</p>
    </div>
  );
};

export default ProductsCard;
