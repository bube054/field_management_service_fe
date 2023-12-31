import React from "react";
import Head1 from "../../atoms/typography/headers/Head1";
import Head2 from "../../atoms/typography/headers/Head2";
import ParagraphOne from "../../atoms/typography/paragraphs/ParagraphOne";
import { NavLink } from "react-router-dom";
import Saly from "../../assets/images/Saly-14.png";
import Logo from "../../assets/images/Logo.png";
import LoginForm from "../../templates/authentication/LoginForm";

const login = () => {
  return (
    <div className="bg-white">
      <div className="mt-[1.5rem] ml-[2.69rem] mb-[4rem]">
        <img src={Logo} />
      </div>
      <div className="flex items-center justify-center gap-[2.5rem]">
        <div className="self-start">
          <hgroup className="mb-[3.31rem]">
            <Head1>Log In To</Head1>
            <Head2>AMORSEV FMS</Head2>
          </hgroup>
          <div className="">
            <ParagraphOne>If you don’t have an account register</ParagraphOne>
            <ParagraphOne>
              You can{" "}
              <NavLink to="/signup" className="hover:underline text-[#0E6A37]">
                Register here !
              </NavLink>
            </ParagraphOne>
          </div>
        </div>
        <div className="self-center">
          <img src={Saly} className="h-[34.75rem]" />
        </div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default login;
