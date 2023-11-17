import React from 'react'
import PropTypes from 'prop-types'

const InputErrorOne = ({children}) => {
  return (
    <p className="font-poppins text-xs mt-1 text-red-500">
      {children}
    </p>
  );
}

InputErrorOne.propTypes = {
  children: PropTypes.node
}

export default InputErrorOne