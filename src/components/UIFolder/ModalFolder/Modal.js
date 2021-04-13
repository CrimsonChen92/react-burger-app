import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../BackdropFolder/Backdrop";

const modal = (props) => (
  //we make 2 ternary exp, on style, where, if props.show(from BurgerBuilder) is true, we show the orderSummary, if false, we translate outside the page, and also we use opcaity "1" which shows the orderSummary, or "0" which make it invisable.
  <Aux>
    <Backdrop show={props.show} hide={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
); //here we use {props.children} which works, bc it's being useing on BurgerBuilders which will use <Aux>
// and <Aux> makes everything in it a props.children.
//the hide={props.modalClosed} will close the modal of the orderSummary, so in BurgerBuilder we need to add that on the <Modal />
export default modal;
