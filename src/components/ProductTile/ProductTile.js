
const ProductTile = ( {product} ) => {
    if (!product) {
        return;
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <img src={product.image} alt='product-img' />
            <p>{product.short_description}</p>
            <span>{product.price}</span>
            {product.sales_price && <span>Now Only: {product.sales_price}</span>}
        </div>
    );
};

export default ProductTile;