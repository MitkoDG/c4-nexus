import React from 'react';
import productsData from '../../data/data.json';

const ProductGrid = ({ filterParams, sortOption }) => {
    const filteredProducts = productsData.filter(product => {
        if (filterParams.category && product.category !== filterParams.category) {
            return false;
        }
        if (
            filterParams.minPrice &&
            parseFloat(product.price) < filterParams.minPrice
        ) {
            return false;
        }

        return true;
    });

    const getSortFunction = () => {
        if (sortOption === 'name-asc') {
          return (a, b) => a.name.localeCompare(b.name);
        }
        if (sortOption === 'name-desc') {
          return (a, b) => b.name.localeCompare(a.name);
        }
        if (sortOption === 'price-asc') {
          return (a, b) => parseFloat(a.price) - parseFloat(b.price);
        }
        if (sortOption === 'price-desc') {
          return (a, b) => parseFloat(b.price) - parseFloat(a.price);
        }
        return null;
      };

      const sortedProducts = [...filteredProducts].sort(getSortFunction());

    return (
        <div>
            {sortedProducts.map(product => (
                <div key={product.name}>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt='product-img' />
                    <p>{product.short_description}</p>
                    <span>{product.price}</span>
                    {product.sales_price && <span>{product.sales_price}</span>}
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
