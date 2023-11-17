import React from 'react'
import PropTypes from 'prop-types'

const Head3 = ({children, className}) => {
  return (
    <h3 className={`text-black text-3xl not-italic font-medium leading-[normal] ${className}`}>
      {children}
    </h3>
  );
}

Head3.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Head3