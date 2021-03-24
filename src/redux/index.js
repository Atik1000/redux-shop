import { createStore } from "redux";

const INITIAL_STATE = {};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };

    default:
      return { INITIAL_STATE };
  }
};

const store = createStore(cartReducer);

export default store;
