import React, { useState } from 'react';
import './ProductTile.css';

const ProductTile = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const addToCart = () => {
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 3000);
    };

    const toggleHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className="product-tile">
            <div className="heart-icon" onClick={toggleHeart}>
                {isHeartFilled ? "❤️" : "🤍"} {/* Use Unicode characters for heart symbols */}
            </div>
            <h3>{product.name}</h3>
            <img src={product.image} alt='product-img' />
            <p>{product.short_description}</p>

            <div className="price-container">
                {product.sales_price ? (
                    <>
                        <span className="sale-price">Now Only: {product.sales_price} €</span>
                        <span className="original-price">{product.price} €</span>
                    </>
                ) : (
                    <span className="normal-price">{product.price} €</span>
                )}
            </div>

            <div className="rating">
                Rating: {product.rating} stars
            </div>

            <button
                className={`add-to-cart-button ${addedToCart ? 'added' : ''}`}
                onClick={addToCart}
            >
                {addedToCart ? 'Added' : 'Buy Now'}
            </button>
        </div>
    );
};

export default ProductTile;