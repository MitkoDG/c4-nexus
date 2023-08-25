import React from 'react';
import productsData from '../../data/data.json';

const ProductGrid = ({ filterParams }) => {
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

    return (
        <div>
            {/* Render the filtered products */}
            {filteredProducts.map(product => (
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
