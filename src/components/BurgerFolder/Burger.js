import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredientFolder/BurgerIngredient";

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      /* the Object.key turns that from an object into an array. the props.ingredients, is getting from BurgerIngredients.js on the state{ingredient}*/
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />; //on the return, we get an array, of 2element[,], then we map again and this time, we only care about the index, so we did _,i, so key={igKey + i} means, the ingredient name and the number.
      });
    })
    .reduce((arr, el) => {
      //this will then reduce the array object into just an array, and show the el, kinda confusing...
      return arr.concat(el); //this loops thru the array, starts with an empty array, then concat/add the el into that array.
    }, []); // the inital value, we set as an empty array with , []. this flatten the array.

  //now by flatten the array with .reduce(), we can make the if statement below, to see if there's any ingredient, if not, the message will show.
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
