import React, { useState } from 'react';
import "./ProductFilter.css"

const ProductFilter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');

  // Handler to apply the filter
  const applyFilter = () => {
    const filterParams = {};

    if (selectedCategory) {
      filterParams.category = selectedCategory;
    }

    if (minPrice !== '') {
      filterParams.minPrice = parseFloat(minPrice);
    }

    if (maxPrice !== '') {
      filterParams.maxPrice = parseFloat(maxPrice);
    }

    if (minRating !== '') {
      filterParams.minRating = parseFloat(minRating);
    }

    if (!selectedCategory && minPrice === '' && maxPrice === '' && minRating === '') {
      onFilter({});
    } else {
      onFilter(filterParams);
    }
  };

  return (
    <div className='filter'>
      <h3>Category filter</h3>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className='filter-select'
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Rating"
        value={minRating}
        onChange={e => setMinRating(e.target.value)}
      />

      <button onClick={applyFilter} className='filter-button'>Apply Filter</button>
    </div>
  );
};

export default ProductFilter;
