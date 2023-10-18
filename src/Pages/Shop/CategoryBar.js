import React from 'react';
import { Link } from 'react-router-dom';
import PriceFilter from './PriceFilter';

const CategoryBar = ({
  handlePriceFilter,
  productData,
  selectedValue,
  handleCategoryFilter,
}) => {
  return (
    <nav className="max-[400px]:hidden min-w-[180px] mr-5 border-r-2 border-[#febd69]">
      <ul className="flex flex-col gap-3 font-bold">
        {productData.categories.map((item) => {
          const formattedName = item.name.replace(/\s+/g, '-').toLowerCase();

          return (
            <Link to={`/shop/${formattedName}`} key={item.id}>
              <li
                className={`${
                  selectedValue.id === item.id && 'text-[#f08804]'
                } hover:text-[#f1a847] cursor-pointer`}
                onClick={() => handleCategoryFilter(item)}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <PriceFilter
        selectedValue={selectedValue}
        handlePriceFilter={handlePriceFilter}
      />
    </nav>
  );
};

export default CategoryBar;
