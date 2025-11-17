import React from "react";
import Logo from "../../../assets/CanaessLogo.png";
import "../Header.css";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="Header">
      <img alt="Logo" src={Logo}></img>
    </div>
  );
};

export { Header };
