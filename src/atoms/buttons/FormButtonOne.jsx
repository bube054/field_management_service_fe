import React from 'react'
import PropTypes from 'prop-types'

const FormButtonOne = ({ onClick, children, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full justify-center items-center py-[1.2rem] px-[2.4rem] shadow-[0px_4px_61px_0px_rgba(14,106,55,0.28)] rounded-[0.5625rem] bg-[#0E6A37] text-white text-base not-italic font-medium leading-[normal] ${disabled ? "bg-opacity-80 cursor-not-allowed" : "bg-opacity-100 cursor-pointer hover:scale-105 duration-300 ease-in"} ${className}`}
    >
      {children}
    </button>
  );
};

FormButtonOne.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.className,
  disabled: PropTypes.bool
}

export default FormButtonOne