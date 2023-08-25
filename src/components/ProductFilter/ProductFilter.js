import React, { useState } from 'react';

const ProductFilter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');

  // Handler to apply the filter
  const applyFilter = () => {
    const filterParams = {
      category: selectedCategory,
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      minRating: parseFloat(minRating)
    };
    onFilter(filterParams);
  };

  return (
    <div>
      {/* Category filter */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price range filter */}
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

      {/* Rating filter */}
      <input
        type="number"
        placeholder="Min Rating"
        value={minRating}
        onChange={e => setMinRating(e.target.value)}
      />

      {/* Apply filter button */}
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
};

export default ProductFilter;
