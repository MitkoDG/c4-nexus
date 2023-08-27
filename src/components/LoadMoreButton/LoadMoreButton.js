import './LoadMoreButton.css';

const LoadMoreButton = ({ onLoadMore, disabled }) => {
  return (
    <div className='load-more-container'>
      <button className="load-more-button" onClick={onLoadMore} disabled={disabled}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
