import './App.css';
import ProductFilter from './components/ProductFilter/ProductFilter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductTile from './components/ProductTile/ProductTile';
import ProductSort from './components/ProductSort/ProductSort';
import React, { useState } from 'react';

function App() {

  const categories = ['Bags', 'Shoes'];

  const [filterParams, setFilterParams] = useState({});

  const handleFilter = (params) => {
    setFilterParams(params);
  };

  const [sortOption, setSortOption] = useState('name-asc');

  const handleSort = (sortBy) => {
    setSortOption(sortBy);
  };

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <ProductFilter categories={categories} onFilter={handleFilter} />
        <div>
          <div>
            <ProductTile />
            <ProductSort onSort={handleSort} />
          </div>
          <ProductGrid filterParams={filterParams} sortOption={sortOption} />
        </div>
      </div>
      <LoadMoreButton />
      <Footer />
    </div>
  );
}

export default App;
