import React from "react";
import Head3 from "../../atoms/typography/headers/Head3";
import ParagraphTwo from "../../atoms/typography/paragraphs/ParagraphTwo";
import { NavLink } from "react-router-dom";
import InputOne from "../../atoms/inputs/InputOne";
import FormButtonOne from "../../atoms/buttons/FormButtonOne";
import { validateUserName, validateName } from "../../utils/validateInputs";
import useGeneralInput from "../../hooks/input/useGeneralInput";
import InputErrorOne from "../../atoms/typography/errors/InputErrorOne";

const LoginForm = () => {
  const {
    value: emailOrUserName,
    changeHandler: emailOrUserNameChangeHandler,
    blurHandler: emailOrUserNameBlurHandler,
    hasError: emailOrUserNameHasError,
    errorMsg: emailOrUserNameErrorMSg,
  } = useGeneralInput(validateName);

  const {
    value: password,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    hasError: passwordHasError,
    errorMsg: passwordErrorMSg,
  } = useGeneralInput(validateName);

  return (
    <form className="self-start">
      <Head3 className="mb-[1.5rem]">Sign In</Head3>
      <div className="w-[24rem] mb-[1rem]">
        <div className="mb-[2rem]">
          <InputOne
            placeholder="Enter email or username"
            type="text"
            className=""
            value={emailOrUserName}
            onChange={emailOrUserNameChangeHandler}
            onBlur={emailOrUserNameBlurHandler}
          />
          {emailOrUserNameHasError && (
            <InputErrorOne>{emailOrUserNameErrorMSg}</InputErrorOne>
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
      </div>
      <ParagraphTwo className="text-right mb-[2.88rem]">
        {" "}
        <NavLink to="/forgot-password" className="hover:underline">
          Forgot password ?
        </NavLink>
      </ParagraphTwo>
      <FormButtonOne>Login</FormButtonOne>
    </form>
  );
};

export default LoginForm;
