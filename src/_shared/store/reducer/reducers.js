import { ACTION_TYPE } from "../actions/AppAction";
import { addProductToCart } from "../../services/AppServices";
import { removeProductFromCart } from "../../services/AppServices";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case ACTION_TYPE.REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
