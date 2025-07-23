import React from 'react';
import PaginationButton from './PaginationButton';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => prev - 1)}
        label="<"
      />
      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => setCurrentPage(i + 1)}
          label={i + 1}
        />
      ))}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(prev => prev + 1)}
        label=">"
      />
    </div>
  );
};

export default Pagination;
