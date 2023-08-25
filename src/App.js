import './App.css';
import Filter from './components/Filters/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductTile from './components/ProductTile/ProductTile';
import Sorting from './components/SortingDropdown/Sorting';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <ProductTile />
      <Sorting />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
