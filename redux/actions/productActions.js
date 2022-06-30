import { ActionTypes } from "../constants/action-types";

export const addToCart = (itemId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
export const adjustQty = (itemId, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
export const loadCurrentItem = (item) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
