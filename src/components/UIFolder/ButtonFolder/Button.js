import React from "react";
import "./Button.css";

const button = (props) => {
  if (props.btnType === "Success") {
    return (
      <button className="ButtonSuccess" onClick={props.clicked}>
        {props.children}
      </button>
    );
  } else
    return (
      <button className="ButtonDanger" onClick={props.clicked}>
        {props.children}
      </button>
    );
};

export default button;
