import React from 'react';
import './ProductSort.css';

const ProductSort = ({ onSort }) => {
  const handleSortChange = e => {
    const selectedSortBy = e.target.value;
    onSort(selectedSortBy);
  };

  return (
    <div className='product-sort'>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default ProductSort;
