import Select from 'react-select';
import { useData } from '../../Contexts/ProductContext';
import styled from 'styled-components';

const SearchForm = styled.form`
  color: #0f1111;
  padding: 0 20px;
  display: flex;

  .css-b62m3t-container {
    width: 100%;
    outline: none !important;
    .css-t3ipsp-control,
    .css-13cymwt-control {
      border-radius: 8px 0 0 8px !important;

      outline: none !important;
      border: none !important;
      &:hover {
        border: none !important;
      }
    }
    .css-1nmdiq5-menu {
      z-index: 11;
    }
  }
`;

const Search = ({ BsSearch, selectedValue, setSelectedValue }) => {
  const { productData } = useData();
  const categories = productData.categories;

  const categoryOptions = categories.map((category) => ({
    value: category.id, // Use a unique identifier as the value
    label: category.name,
  }));

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  return (
    <SearchForm action="submit">
      <Select
        value={selectedValue}
        onChange={handleSelectChange}
        options={categoryOptions}
      />
      <button
        className="bg-[#febd69] rounded-r-lg border-l border-[#131921] h-[38px] hover:bg-[#f3a847] text-[#232f3e] outline-none p-3"
        type="submit"
      >
        <BsSearch />
      </button>
    </SearchForm>
  );
};

export default Search;
