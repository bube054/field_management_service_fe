import React from 'react'
import PropTypes from 'prop-types'

const InputPlaceholder = ({children}) => {
  return (
    <div className="text-[#0E6A37] text-[0.9375rem] not-italic font-normal leading-[normal]">
      {children}
    </div>
  );
}

InputPlaceholder.propTypes = {
  children: PropTypes.node
}

export default InputPlaceholder