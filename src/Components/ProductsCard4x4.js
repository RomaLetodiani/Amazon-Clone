import React from 'react';

const ProductsCard4x4 = ({ item }) => {
  return (
    <div className="w-[30%] p-[clamp(8px,2vw,25px)] bg-[#fff]">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <div className="grid grid-cols-2 gap-4 my-5">
        {item.images.map((i, index) => (
          <div key={index}>
            <img src={i.img} alt={i.name} />
            <p className="text-xs">{i.name}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#007185]">{item.text}</p>
    </div>
  );
};

export default ProductsCard4x4;
