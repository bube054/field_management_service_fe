import React from 'react'
import PropTypes from 'prop-types'

const Head2 = ({children, className}) => {
  return (
    <h2 className={`text-black text-[2.1875rem] not-italic font-medium leading-[normal] font-notosans ${className}`}>
      {children}
    </h2>
  );
}

Head2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Head2