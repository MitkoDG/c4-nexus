import React from 'react';
import './CategoriesDesc.css';

const CategoriesDesc = ({ selectedCategory }) => {
  return (
    <div className="category-desc">
      <h3>Selected Category: <span className="category_name">{selectedCategory}</span></h3>
    </div>
  );
};

export default CategoriesDesc;