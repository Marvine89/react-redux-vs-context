import { dispatch } from "../service";

export const ACTION_TYPE = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
};

/**
 * It adds
 * @param {string[]} product
 * @param {any} dispatch
 */
export const addProductToCart = (product) => {
  setTimeout(() => {
    dispatch({ type: ACTION_TYPE.ADD_PRODUCT, product: product });
  }, 100);
};

/**
 * @param {number} productId
 * @param {function} dispatch
 */
export const removeProductFromCart = (productId) => {
  setTimeout(() => {
    dispatch({ type: ACTION_TYPE.REMOVE_PRODUCT, productId: productId });
  }, 100);
};
