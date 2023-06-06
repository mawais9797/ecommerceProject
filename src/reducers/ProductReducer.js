const initialState = {
  listOfProducts: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  customerOrder: [],
};

const productReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        listOfProducts: action.payload, // Replace [] with the actual data you want to set for listOfProducts
      };

    case "ADD_TO_CART":
      debugger;
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.id === existItem.id ? item : p
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "UPDATE_TO_CART":
      debugger;
      return {
        ...state,
        cartItems: action.payload,
      };

    case "REMOVE_ITEM_FROM_CART":
      debugger;
      return {
        ...state,
        cartItems: action.payload,
      };

    case "EMPTY_MY_CART":
      debugger;
      return {
        ...state,
        cartItems: action.payload,
      };

    case "CUSTOMER_ORDER_SUBMITTED":
      debugger;
      return {
        ...state,
        customerOrder: [...state.customerOrder, action.payload],
        cartItems: [],
      };
    default:
      return state; // Return the current state for any other action type
  }
};

export default productReducer;
