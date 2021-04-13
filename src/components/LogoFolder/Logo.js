import React from "react";
import burgerLogo from "../../assets/imagesFolder/burger-logo.png";
import "./Logo.css";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="theBurger" />
  </div>
);

export default logo;
