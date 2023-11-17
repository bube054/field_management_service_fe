import React from "react";
import Head3 from "../../atoms/typography/headers/Head3";
import InputOne from "../../atoms/inputs/InputOne";
import FormButtonOne from "../../atoms/buttons/FormButtonOne";
import InputErrorOne from "../../atoms/typography/errors/InputErrorOne";
import useGeneralInput from "../../hooks/input/useGeneralInput";
import { validateName, validateUserName, validateEmail, validatePassword, validateConfirmPassword } from "../../utils/validateInputs";

const SignupForm = () => {
  const {
    value: firstName,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    errorMsg: firstNameErrorMSg,
  } = useGeneralInput(validateName);

  const {
    value: lastName,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    errorMsg: lastNameErrorMSg,
  } = useGeneralInput(validateName);

  const {
    value: username,
    changeHandler: usernameChangeHandler,
    blurHandler: usernameBlurHandler,
    hasError: usernameHasError,
    errorMsg: usernameErrorMSg,
  } = useGeneralInput(validateUserName);

  const {
    value: email,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    hasError: emailHasError,
    errorMsg: emailErrorMSg,
  } = useGeneralInput(validateEmail);

  const {
    value: password,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    hasError: passwordHasError,
    errorMsg: passwordErrorMSg,
  } = useGeneralInput(validatePassword);

  const {
    value: confirmPassword,
    changeHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlurHandler,
    hasError: confirmPasswordHasError,
    errorMsg: confirmPasswordErrorMSg,
  } = useGeneralInput(validateConfirmPassword, password);

  const formIsValid = !(firstNameHasError && lastNameHasError && usernameHasError && emailErrorMSg && passwordHasError && confirmPasswordHasError)

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className="self-start">
      <Head3 className="mb-[1.5rem]">Sign In</Head3>
      <div className="w-[24rem] mb-[1rem] space-y-[1.1rem]">
        <div className="flex flex-col items-start lg:flex-row gap-x-[1.1rem] gap-y-[1rem]">
          <div className="">
            <InputOne
              placeholder="First Name"
              type="text"
              className=""
              value={firstName}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <InputErrorOne>{firstNameErrorMSg}</InputErrorOne>
            )}
          </div>
          <div>
            <InputOne
              placeholder="Last name"
              type="text"
              className=""
              value={lastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <InputErrorOne>{lastNameErrorMSg}</InputErrorOne>
            )}
          </div>
        </div>
        <div>
          <InputOne
            placeholder="Username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && (
            <InputErrorOne>{usernameErrorMSg}</InputErrorOne>
          )}
        </div>
        <div>
          <InputOne
            placeholder="Email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <InputErrorOne>{emailErrorMSg}</InputErrorOne>
          )}
        </div>
        <div>
          <InputOne
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <InputErrorOne>{passwordErrorMSg}</InputErrorOne>
          )}
        </div>
        <div>
          <InputOne
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
          />
          {confirmPasswordHasError && (
            <InputErrorOne>{confirmPasswordErrorMSg}</InputErrorOne>
          )}
        </div>
      </div>
      <FormButtonOne disabled={!formIsValid}>Login</FormButtonOne>
    </form>
  );
};

export default SignupForm;
