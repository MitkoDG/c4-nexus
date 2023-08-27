import React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import "./ProductGrid.css"

const ProductGrid = ({ filterParams, sortOption, visibleProducts, productsData, selectedCategory, onTotalProductsCalculated  }) => {

    const filteredProducts = productsData.filter(product => {
        if (selectedCategory !== 'All' && product.category !== selectedCategory) {
            return false;
        }
        if (filterParams.minPrice && parseFloat(product.price) < filterParams.minPrice) {
            return false;
        }
        return true;
    });

    const calculatedTotalProducts = filteredProducts.length;
    onTotalProductsCalculated(calculatedTotalProducts);

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
    const visibleProductsList = sortedProducts.slice(0, visibleProducts);

    return (
        <div className='product_list'>
            {visibleProductsList.map(product => (
                <ProductTile key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
