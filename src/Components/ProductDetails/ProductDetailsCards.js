import React from 'react';

const ProductDetailsCards = ({ product, handleAddToCart, addingToCart }) => {
  return (
    <div className="flex gap-5 max-[600px]:flex-col lg:flex-col  lg:max-w-[250px]">
      <div className="border-2 flex flex-col flex-1 gap-5 items-start p-5 rounded-lg">
        <div className="flex gap-3">
          <h3 className="w-20">Price:</h3>
          <h3 className="font-bold text-lg">${product.price}</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Brand: </h3>
          <h3 className="flex-1">{product.brand}</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Model:</h3>
          <h3 className="flex-1">{product.model}</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Ships from:</h3>
          <h3 className="flex-1">Amazon.com</h3>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-[#FFD814] min-w-[120px] border shadow-lg rounded-lg px-3 py-1 hover:bg-[#F7CA00] text-[#232f3e]"
        >
          {addingToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
      <div className="border-2 flex flex-col gap-5 flex-1 p-5 rounded-lg">
        <div className="flex gap-3">
          <h3 className="w-20">Sold by:</h3>
          <h3 className="flex-1">Amazon.com</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Returns:</h3>
          <h3 className="flex-1">
            Eligible for Return, Refund or Replacement within 30 days of receipt
          </h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Payment:</h3>
          <h3 className="flex-1">Secure transaction</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="w-20">Support:</h3>
          <h3 className="flex-1">Product support included</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCards;
