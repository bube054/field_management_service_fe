import React, {useEffect, useState} from 'react'

const useGeneralInput = (validateInput, param) => {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(validateInput(value, param || "")[0])
  const [isTouched, setIsTouched] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(validateInput(value, param || "")[1]);

  const resetHandler = () => {
    setValue("")
    setIsValid(false)
    setIsTouched(false)
    setHasError(false)
    setErrorMsg(false)
  }

  const changeHandler = (newValue) => {
    setValue(newValue)
    setIsValid(validateInput(newValue, param || "")[0]);
  }

  const blurHandler = () => {
    setIsTouched(true)
  }

  const setHasErrorHandler = (hasErr, errMsg) => {
    if(hasErr){
      setHasError(true)
      setErrorMsg(errMsg)
    }else {
      setHasError(false)
    }
  }

  useEffect(() => {
    setHasError(!isValid && isTouched);
    setErrorMsg(validateInput(value, param || "")[1]);
  }, [isValid, isTouched, validateInput, param])

  return {
    value: value,
    changeHandler: changeHandler,
    blurHandler: blurHandler,
    isTouched: isTouched,
    errorMsg: errorMsg,
    hasError: hasError,
    isValid: isValid,
    setHasErrorHandler: setHasErrorHandler,
    resetHandler: resetHandler
  }
}

export default useGeneralInput