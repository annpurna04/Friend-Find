import React from 'react';

const PaginationButton = ({ onClick, disabled, active, label }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={active ? 'active' : ''}
  >
    {label}
  </button>
);

export default PaginationButton;
