import './LoadMoreButton.css';

const LoadMoreButton = ({ onLoadMore, disabled, displayedProducts, totalProducts }) => {
  return (
    <div className='load-more-container'>
      <button className="load-more-button" onClick={onLoadMore} disabled={disabled}>
      {`Show More ( ${displayedProducts} - ${totalProducts} results )`}
      </button>
    </div>
  );
};

export default LoadMoreButton;
