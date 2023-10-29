import Select from 'react-select';
import { useData } from '../../Contexts/ProductContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchDiv = styled.div`
  color: #0f1111;
  padding: 0 20px;
  display: flex;

  @media (max-width: 767px) {
    padding: 0;
  }

  .css-b62m3t-container {
    width: 100%;
    outline: none !important;
    .css-t3ipsp-control,
    .css-13cymwt-control {
      border-radius: 8px 0 0 8px !important;
      flex-wrap: nowrap !important;
      -webkit-flex-wrap: nowrap !important;
      outline: none !important;
      border: none !important;
      &:hover {
        border: none !important;
      }
    }
    .css-1nmdiq5-menu {
      width: 200px;
      z-index: 11;
    }
  }
`;

const Search = ({ BsSearch, setSelectedValue }) => {
  const navigate = useNavigate();
  const { productData } = useData();
  const [category, setCategory] = useState();
  const categories = productData.categories;

  const categoryOptions = categories.map((category) => ({
    value: category.id, // Use a unique identifier as the value
    label: category.name,
  }));

  const handleSelectChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const handleCategoryFilter = (category) => {
    const { value: id, label: name } = category;

    setSelectedValue({ id, name });
    const formattedName = name.replace(/\s+/g, '-').toLowerCase();
    navigate(`/shop/${formattedName}`);
    setCategory('');
  };

  return (
    <SearchDiv>
      <Select
        value={category}
        onChange={handleSelectChange}
        options={categoryOptions}
        placeholder="category"
      />
      <button
        className="bg-[#febd69] rounded-r-lg border-l border-[#131921] h-[38px] hover:bg-[#f3a847] text-[#232f3e] outline-none p-3"
        onClick={() => handleCategoryFilter(category)}
      >
        <BsSearch />
      </button>
    </SearchDiv>
  );
};

export default Search;
