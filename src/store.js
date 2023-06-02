import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./reducers/ProductReducer";
// import { cartReducer } from "./reducers/CartReducer";
// import productReducer from "./reducers/ProductReducer";

const reducer = combineReducers({
  products: productReducer,
});
// debugger;
// const listFromStorage = localStorage.getItem("listOfProducts")
//   ? JSON.parse(localStorage.getItem("listOfProducts"))
//   : null;
// // debugger;
// const initialState = {
//   products: [],
// };

const middlware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
