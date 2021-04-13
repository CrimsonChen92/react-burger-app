import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/BurgerFolder/Burger";
import BuildControls from "../../components/BurgerFolder/BuildControlsFolder/BuildControls";
import Modal from "../../components/UIFolder/ModalFolder/Modal";
import OrderSummary from "../../components/BurgerFolder/OrderSummaryFolder/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.75,
  cheese: 0.4,
  meat: 1.7,
};
class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={...}  we could use the constructor/super/state, but it's not neccessary so we are only going to use just the state{} now
  state = {
    ingredients: {
      //the salad, bacon, etc names needs to match exactly the same on BurgerIngredients switch case name to work.
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4.25,
    purchasable: false, //this is to check if any items have been added to the burger
    purchasing: false, //this is to show the orderSummary
  };

  updatePurchaseState(ingredientsForPurchase) {
    const sum = Object.keys(ingredientsForPurchase)
      .map((igKey) => {
        return ingredientsForPurchase[igKey]; //now we use Object.key to turn that into an array, and the map it
      }) //map it so we return every individual ingredients[salad,bacon,etc]
      .reduce((newSum, el) => {
        return newSum + el; //now we reduce it, with newSum, and el, el is the index of the ingredientForPurchase
      }, 0); //we reduce function, we give it 0, bc that's where we want to start
    this.setState({ purchasable: sum > 0 }); //now we setstate, if sum>0, then its true.
  }
  addIngredientHandler = (type) => {
    //this method will updated and add ingredient
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients); //this updatedIngredients is pass as ingredientsForPurchase
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      //this stops the code if you try to remove items after there already none
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    //make sure to use a function if you do pH(){ this.setState{{}}} that won't work
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }; //pCancelHandler will making purchasing false, so the orderSummary will not show anymore

  purchaseContinueHandler = () => {
    alert("You Continue!!");
  };

  //below on the BuildControl, we pass the addIngredientHandler to it, and now we go to BuildControls.js to recieve it
  //the removeIngredientHandler goes thru the same process too.
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0; //for line 61-66, we are making the less button disable if it's less than 0.
    } //{salad: true, meat:false, ...}
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredientsForOrderSummary={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchasedContinued={this.purchaseContinueHandler}
            total={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable} //purchasable is now able to be passed to buildControls
          price={this.state.totalPrice}
          ordered={this.purchaseHandler} //buildControls, we have onClick named onClick={props.ordered}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
