import React from "react";
import "./Backdrop.css";

//this is the backdrop for the orderSummary, we are making this so we can click outside of the orderSummary
//and when we do, it'll clear the orderSummary info.
//we also link this backdrop to the Modal.js as that will control the backdrop
//also add the onClick ={props.hide} where hide will hide the orderSummary

const backdrop = (props) =>
  props.show ? <div className="Backdrop" onClick={props.hide}></div> : null;

export default backdrop;
