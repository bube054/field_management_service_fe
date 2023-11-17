import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head3 from "../../atoms/typography/headers/Head3";
import InputOne from "../../atoms/inputs/InputOne";
import FormButtonOne from "../../atoms/buttons/FormButtonOne";
import InputErrorOne from "../../atoms/typography/errors/InputErrorOne";
import useGeneralInput from "../../hooks/input/useGeneralInput";
import {
  validateName,
  validateUserName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validateInputs";
import {
  signupUser,
  loginSliceActions,
} from "../../state-manager/slices/auth/signup";
import { useSelector, useDispatch } from "react-redux";

const SignupForm = () => {
  const {
    value: firstName,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    errorMsg: firstNameErrorMSg,
    isValid: firstNameIsValid,
    setHasErrorHandler: firstNameSetHasErrHandler,
    resetHandler: firstNameResetHandler,
  } = useGeneralInput(validateName);

  const {
    value: lastName,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    errorMsg: lastNameErrorMSg,
    isValid: lastNameIsValid,
    setHasErrorHandler: lastNameSetHasErrHandler,
    resetHandler: lastNameResetHandler,
  } = useGeneralInput(validateName);

  const {
    value: username,
    changeHandler: usernameChangeHandler,
    blurHandler: usernameBlurHandler,
    hasError: usernameHasError,
    errorMsg: usernameErrorMSg,
    isValid: usernameIsValid,
    setHasErrorHandler: usernameSetHasErrHandler,
    resetHandler: usernameResetHandler,
  } = useGeneralInput(validateUserName);

  const {
    value: email,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    hasError: emailHasError,
    errorMsg: emailErrorMSg,
    isValid: emailIsValid,
    setHasErrorHandler: emailSetHasErrHandler,
    resetHandler: emailResetHandler,
  } = useGeneralInput(validateEmail);

  const {
    value: password,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    hasError: passwordHasError,
    errorMsg: passwordErrorMSg,
    isValid: passwordIsValid,
    setHasErrorHandler: passwordSetHasErrHandler,
    resetHandler: passwordResetHandler,
  } = useGeneralInput(validatePassword);

  const {
    value: confirmPassword,
    changeHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlurHandler,
    hasError: confirmPasswordHasError,
    errorMsg: confirmPasswordErrorMSg,
    isValid: confirmPasswordIsValid,
    setHasErrorHandler: confirmPasswordSetHasErrHandler,
    resetHandler: confirmPasswordResetHandler,
  } = useGeneralInput(validateConfirmPassword, password);

  const signup = useSelector((state) => state.signup);
  const {
    loading,
    statusCode,
    errorMessage,
    isError,
    successMessage,
    isSuccessful,
    _errors,
  } = signup;
  const dispatch = useDispatch();

  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid;

  useEffect(() => {
    // console.log(signup);
    if (isError === true) {
      firstNameSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "firstName")?.msg
      );
      lastNameSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "lastName")?.msg
      );
      usernameSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "username")?.msg
      );
      emailSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "email")?.msg
      );
      passwordSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "password")?.msg
      );
      confirmPasswordSetHasErrHandler(
        true,
        _errors.find((err) => err?.path === "confirmPassword")?.msg
      );
      toast.error(`${statusCode}: ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (isSuccessful) {
      firstNameResetHandler();
      lastNameResetHandler();
      emailResetHandler();
      usernameResetHandler();
      passwordResetHandler();
      confirmPasswordResetHandler();

      toast.success(`${statusCode}: ${successMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isError, isSuccessful]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginSliceActions.changeAnyState({ key: "isError", value: null }));
    dispatch(
      loginSliceActions.changeAnyState({ key: "isSuccessful", value: null })
    );
    firstNameSetHasErrHandler(false);
    lastNameSetHasErrHandler(false);
    usernameSetHasErrHandler(false);
    emailSetHasErrHandler(false);
    passwordSetHasErrHandler(false);
    confirmPasswordSetHasErrHandler(false);
    dispatch(
      signupUser({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            {emailHasError && <InputErrorOne>{emailErrorMSg}</InputErrorOne>}
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
        <FormButtonOne
          disabled={!formIsValid || loading}
          loading={loading}
          className=""
        >
          {loading ? "Registering" : "Register"}
        </FormButtonOne>
      </form>
    </>
  );
};

export default SignupForm;
