import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
