import React, { createContext } from "react";
import { PRODUCTS } from "../../constants/products";

export const AppContext = createContext({
  products: PRODUCTS,
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

/**
 * @param {Component} Component
 */
export const withAppContext = (Component) => {
  return (props) => (
    <AppContext.Consumer>
      {(context) => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );
};
