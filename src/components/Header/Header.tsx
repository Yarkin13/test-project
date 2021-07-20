import React from "react";
import logo from "../../assets/Logo.png";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
    </header>
  );
};

export default Header;
