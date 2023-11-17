import validator from "validator";

export const validateName = (name) => {
  if (name.trim().length > 0) return [true, ""];
  else return [false, "Name field can not be empty"];
};

export const validateUserName = (name) => {
  const MIN_USER_NAME = 3;
  if (name.trim().length >= MIN_USER_NAME) return [true, ""];
  else return [false, `Username must have ${MIN_USER_NAME} characters minimum`];
};

export const validateEmail = (email) => {
  if (validator.isEmail(email)) return [true, ""];
  else return [false, `Email field is not valid`];
};

export const validatePassword = (password) => {
  const MIN_PASSWORD_LENGTH = 6;

  // Check for minimum length
  if (password.length < MIN_PASSWORD_LENGTH) {
    return [
      false,
      `Password must have at least ${MIN_PASSWORD_LENGTH} characters`,
    ];
  }

  // Check for at least 1 special character
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (!specialCharacterRegex.test(password)) {
    return [false, "Password must contain at least 1 special character"];
  }

  // Check for at least 1 number
  const numberRegex = /\d/;
  if (!numberRegex.test(password)) {
    return [false, "Password must contain at least 1 number"];
  }

  // Check for at least 1 uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return [false, "Password must contain at least 1 uppercase letter"];
  }

  // Check for at least 1 lowercase letter
  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
    return [false, "Password must contain at least 1 lowercase letter"];
  }

  // If all conditions are met, return true
  return [true, ""];
};

export const validateConfirmPassword = (confirmPassword, password) => {
  console.log({confirmPassword, password})
  if(confirmPassword.trim() === "") return [false, "Confirm password field is empty"]
  if(confirmPassword !== password) return [false, "Passwords are not equal"]
  else return [true, ""]
}