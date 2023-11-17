import React, {useEffect, useState} from 'react'

const useGeneralInput = (validateInput, param) => {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(validateInput(value, param || "")[0])
  const [isTouched, setIsTouched] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(validateInput(value)[1]);

  const changeHandler = (newValue) => {
    setValue(newValue)
    setIsValid(validateInput(newValue)[0])
  }

  const blurHandler = () => {
    setIsTouched(true)
  }

  useEffect(() => {
    setHasError(!isValid && isTouched);
    setErrorMsg(validateInput(value)[1])
  }, [isValid, isTouched, validateInput])

  return {
    value: value,
    changeHandler: changeHandler,
    blurHandler: blurHandler,
    isTouched: isTouched,
    errorMsg: errorMsg,
    hasError: hasError
  }
}

export default useGeneralInput