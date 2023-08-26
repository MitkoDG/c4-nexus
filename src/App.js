import './App.css';
import ProductFilter from './components/ProductFilter/ProductFilter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductSort from './components/ProductSort/ProductSort';
import React, { useEffect, useState } from 'react';
import productsData from './data/data.json';
// import productsData from './data/MOCK_DATA.json';
import CategoriesDesc from './components/CategoriesDesc/CategoriesDesc';


function App() {

  const categories = ['Bags', 'Shoes'];
  const [filterParams, setFilterParams] = useState({});
  const [sortOption, setSortOption] = useState('name-asc');
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() =>{
    setSelectedCategory(categories[0]);
  },[])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  // filter
  const handleFilter = (params) => {
    setFilterParams(params);
    setSelectedCategory(params.category || "All");
  }

  // sort
  const handleSort = sortBy => {
    setSortOption(sortBy);
  };

  // load more button
  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 5);
  };
  const totalProducts = productsData.length;
  const disabledLoadMore = visibleProducts >= totalProducts;

  return (
    <div className="App">
      <Header
        totalProducts={ totalProducts }
        displayedProducts={ visibleProducts }
        onCategoryClick={handleCategoryClick}
      />
      <div className='body'>
        <ProductFilter categories={categories} onFilter={handleFilter} />
        <div>
          <div>
            <CategoriesDesc selectedCategory={selectedCategory} />
            <ProductSort onSort={handleSort} />
          </div>
          <ProductGrid 
          visibleProducts={visibleProducts} 
          filterParams={filterParams} 
          sortOption={sortOption} 
          productsData={productsData} 
          selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <LoadMoreButton onLoadMore={handleLoadMore} disabled={disabledLoadMore} />
      <Footer />
    </div>
  );
}

export default App;
