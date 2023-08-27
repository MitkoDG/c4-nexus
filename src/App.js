import './App.css';
import ProductFilter from './components/ProductFilter/ProductFilter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductSort from './components/ProductSort/ProductSort';
import React, { useEffect, useState } from 'react';
import productsData from './data/data.json';
import CategoriesDesc from './components/CategoriesDesc/CategoriesDesc';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {

  const categories = ['Bags', 'Shoes'];
  const [filterParams, setFilterParams] = useState({});
  const [sortOption, setSortOption] = useState('name-asc');
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [totalProducts, setTotalProducts] = useState(productsData.length);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [])

  useEffect(() => {
    if (visibleProducts > totalProducts) {
      setVisibleProducts(totalProducts)
    }
  }, [visibleProducts])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter
  const handleFilter = (params) => {
    setVisibleProducts(10);
    setFilterParams(params);
    setSelectedCategory(params.category || "All");
  }

  // Sort
  const handleSort = sortBy => {
    setSortOption(sortBy);
  };

  // Load more button
  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10);
  };
  // const totalProducts = productsData.length;
  const disabledLoadMore = visibleProducts >= totalProducts;

  return (
    <div className="App">
      <Header
        totalProducts={totalProducts}
        displayedProducts={visibleProducts}
        onCategoryClick={handleCategoryClick}
      />
      <div className='body'>
        <ProductFilter categories={categories} onFilter={handleFilter} />
        <div className='product-section'>
          <div className='product-info'>
            <CategoriesDesc selectedCategory={selectedCategory} />
            <ProductSort onSort={handleSort} />
          </div >
          <ProductGrid
            visibleProducts={visibleProducts}
            filterParams={filterParams}
            sortOption={sortOption}
            productsData={productsData}
            selectedCategory={selectedCategory}
            onTotalProductsCalculated={total => setTotalProducts(total)}
          />
          <LoadMoreButton onLoadMore={handleLoadMore} disabled={disabledLoadMore} />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
