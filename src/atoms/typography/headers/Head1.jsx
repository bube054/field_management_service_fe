import React from 'react'
import PropTypes from 'prop-types'

const Head1 = ({children, className}) => {
  return (
    <h1 className={`text-black text-[3.125rem] not-italic font-semibold leading-[normal] font-montserrat ${className}`}>
      {children}
    </h1>
  );
}

Head1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Head1