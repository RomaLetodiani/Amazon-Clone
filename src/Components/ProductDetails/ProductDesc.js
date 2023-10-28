import React from 'react';

const ProductDesc = ({ product, expanded, toggleDescription }) => {
  return (
    <div className="flex flex-col flex-1 justify-center lg:items-start items-center gap-5">
      <div className="flex gap-5 md:flex-row flex-col justify-center">
        <div className="lg:max-w-[400px] flex-1 max-w-[300px] md:min-w-[300px] min-w-[220px]">
          <img
            className="w-full"
            alt={product.name}
            src={product.image || product.images[0]}
          />
        </div>
        <div className="lg:max-w-2xl">
          <h3 className="font-bold text-xl">{product.name}</h3>
          <h3 className="text-lg mt-10">Product's Description:</h3>
          <p>
            {expanded ? product.description : product.description.slice(0, 500)}
            {product.description.length > 500 && (
              <button
                className="text-[#232f3e] font-bold"
                onClick={toggleDescription}
              >
                {expanded ? '- Show Less' : '... See More'}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
