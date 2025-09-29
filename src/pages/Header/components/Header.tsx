import React from "react";
import Logo from "../../../assets/CanaessLogo.png";
import "../Header.css";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="Header">
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export { Header };
