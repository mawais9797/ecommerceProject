const cartState = [];

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};
