import React from 'react';

const ProductsCard = ({ item }) => {
  return (
    <div className="w-[30%] p-[clamp(8px,2vw,25px)] bg-[#fff]">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <img className="my-5" src={item.img} alt={item.title} />
      <p className="text-xs text-[#007185]">{item.text}</p>
    </div>
  );
};

export default ProductsCard;
