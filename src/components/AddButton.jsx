import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const AddButton = ({ onClick, isClicked }) => (
  <button
    onClick /* special react prop */={onClick} /* passing func named onclick as the handler for this prop */
    style={{
      outline: isClicked ? `2px solid #2563eb` : `2px solid #ffffff`,
      outlineOffset: '2px',
    }}
  >
    <FaUserPlus /> &nbsp;Add
  </button>
);

export default AddButton;
