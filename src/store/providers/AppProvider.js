import React, { useReducer, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { AppReducer } from "../reducer/reducers";
import { PRODUCTS } from "../../constants/products";
import { addProductToCart } from "../actions/AppAction";
import { removeProductFromCart } from "../actions/AppAction";
import { onDispatch$ } from "../actions/AppAction";
import { Subscription } from "rxjs";

export const AppProvider = (props) => {
  let ngUnsubscribe = new Subscription();
  const [cartState, dispatch] = useReducer(AppReducer, { cart: [] });

  useEffect(() => {
    ngUnsubscribe = onDispatch$.subscribe((r) => {
      console.log(r);
      dispatch(r);
    });

    return () => {
      ngUnsubscribe.unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        products: PRODUCTS,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
