import React from 'react'
import PropTypes from 'prop-types'

const ParagraphTwo = ({children, className}) => {
  return (
    <p className={`text-[#B0B0B0] text-[0.8125rem] not-italic font-normal leading-[normal] ${className}`}>
      {children}
    </p>
  );
}

ParagraphTwo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ParagraphTwo