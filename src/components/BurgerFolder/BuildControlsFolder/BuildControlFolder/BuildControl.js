import React from "react";
import "./BuildControl.css";

//on the More button, we make an onClick, that active the added button from BuildControls.js, which get the addIngredientHandler from BurgerBuilder.js
const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
