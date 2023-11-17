import React from 'react'
import PropTypes from 'prop-types'
import logoImg from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

const Logo = ({ isLink, to }) => {
  if(isLink) return (
    <NavLink to={to || "/"}>
      <img src={logoImg} className="w-[10.3125rem] h-10" alt="App Logo" />
    </NavLink>
  );
  else return <img src={logoImg} className="w-[10.3125rem] h-10" alt="App Logo" />;
};

Logo.propTypes = {
  isLink: PropTypes.bool,
  to: PropTypes.string,
}

export default Logo