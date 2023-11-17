import React from 'react'
import PropTypes from 'prop-types'

const ParagraphOne = ({children, className}) => {
  return (
    <p className={`font-poppins text-base not-italic font-normal leading-[normal] ${className}`}>
      {children}
    </p>
  );
}

ParagraphOne.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ParagraphOne