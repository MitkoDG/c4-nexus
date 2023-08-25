import React from 'react';

const LoadMoreButton = ({ onLoadMore, disabled }) => {
  return (
    <button onClick={onLoadMore} disabled={disabled}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
