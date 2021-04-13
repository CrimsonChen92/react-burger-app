import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UIFolder/ButtonFolder/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredientsForOrderSummary) //once again, we want to the ingredients and list them into a list. so Object.key
    .map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {props.ingredientsForOrderSummary[igKey]}
        </li>
      ); //{igKey will be the salad,bacon etc} {props.ingredients[igKey] will be the value of it}
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredidents: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total: $ {props.total.toFixed(2)}</strong>
      </p>
      <p> Continue to CheckOut</p>

      <Button btnType="Success" clicked={props.purchasedContinued}>
        CONTINUE
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
