import React, { useState } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputOne = ({ placeholder, type, className, value, onChange, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPasswordHandler = () => {
    setShowPassword(previousValue => !previousValue)
  }

  if (type === "password") {
    return (
      <div className={`w-full relative ${className}`}>
        <input
          className="text-[#0E6A37] text-[0.9375rem] not-italic font-normal leading-[normal] p-[1.2rem] placeholder:text-[#0E6A37] outline-none focus:ring-1 focus:ring-[#0E6A37] placeholder:text-[0.9375rem] rounded-lg bg-[#EAF4EF] w-full"
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        ></input>
        {showPassword ? (
          <VisibilityIcon
            tabIndex={1}
            className="absolute top-1/2 -translate-y-1/2 text-[#0E6A37] right-[1.2rem] cursor-pointer outline-none"
            onClick={toggleShowPasswordHandler}
          />
        ) : (
          <VisibilityOffIcon
            tabIndex={1}
            className="absolute top-1/2 -translate-y-1/2 text-[#0E6A37] right-[1.2rem] cursor-pointer outline-none"
            onClick={toggleShowPasswordHandler}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className={`w-full relative ${className}`}>
        <input
          className="text-[#0E6A37] text-[0.9375rem] not-italic font-normal leading-[normal] p-[1.2rem] placeholder:text-[#0E6A37] outline-none focus:ring-1 focus:ring-[#0E6A37] placeholder:text-[0.9375rem] rounded-lg bg-[#EAF4EF] w-full"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        ></input>
      </div>
    );
  }
};

InputOne.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default InputOne;
