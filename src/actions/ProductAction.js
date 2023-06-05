import { useDispatch, useSelector } from "react-redux";
// import products from "../products/products";

export const listOfProduct = (products) => async (dispatch) => {
  // debugger;
  try {
    dispatch({
      type: "PRODUCT_LIST",
      payload: products,
    });
    // debugger;
    localStorage.setItem("listOfProducts", JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (product) => async (dispatch, getState) => {
  console.log("action prodeuct =", product);
  debugger;

  try {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: product.qty,
      },
    });
    // debugger;
    // const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
    // debugger;
    // const updatedCartItems = currentCartItems.push(product);
    // debugger;
    let getDataFromLocalStorage =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    getDataFromLocalStorage.push(product);
    localStorage.setItem("cartItems", JSON.stringify(getDataFromLocalStorage));
  } catch (error) {
    console.log(error);
  }
};

export const cartItemUpdate =
  (updatedCartProducts) => async (dispatch, getState) => {
    console.log("action prodeuct =", updatedCartProducts);
    debugger;

    try {
      dispatch({
        type: "UPDATE_TO_CART",
        payload: updatedCartProducts,
      });
      // debugger;
      // const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
      // debugger;
      // const updatedCartItems = currentCartItems.push(product);
      // debugger;
      // let getDataFromLocalStorage =
      //   JSON.parse(localStorage.getItem("cartItems")) || [];
      // // getDataFromLocalStorage.push(product);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
    } catch (error) {
      console.log(error);
    }
  };

export const orderDetails = (order) => async (dispatch) => {
  console.log("OrderAction =", order);
  debugger;
  try {
    dispatch({
      type: "CUSTOMER_ORDER_SUBMITTED",
      payload: order,
    });
    debugger;
    // var getDataFromLocalStorage = [];
    // getDataFromLocalStorage = JSON.parse(localStorage.getItem("customerOrder"));
    // getDataFromLocalStorage = getDataFromLocalStorage.push(order);
    // localStorage.setItem(
    //   "customerOrder",
    //   JSON.stringify(getDataFromLocalStorage)
    // );

    let getDataFromLocalStorage =
      JSON.parse(localStorage.getItem("customerOrder")) || [];
    getDataFromLocalStorage.push(order);
    localStorage.setItem(
      "customerOrder",
      JSON.stringify(getDataFromLocalStorage)
    );
  } catch (error) {
    console.log("Error is =", error);
  }
};

export const emptyCart = () => async (dispatch) => {
  try {
    const emptyArry = [];
    dispatch({
      type: "EMPTY_MY_CART",
      payload: emptyArry,
    });
    localStorage.setItem("cartItems", JSON.stringify(emptyArry));
  } catch (error) {
    console.log("Error here =", error);
  }
};

export const removeFromCart = (updatedCartItems) => async (dispatch) => {
  debugger;
  // let cartItems = useSelector((state) => state.products.cartItems);
  // let updatedCart = cartItems.filter((item) => item.id != id);
  try {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: updatedCartItems,
    });
    // debugger;
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  } catch (error) {
    // console.log(error);
  }
};

// import { useDispatch } from "react-redux";
// import products from "../products/products";

// export const listOfProduct = () => {
//   const dispatch = useDispatch();
//   try {
//     debugger;
//     dispatch({
//       type: "PRODUCT_LIST",
//       payload: products,
//     });
//     debugger;
//     localStorage.setItem("listOfProducts", JSON.stringify(products));
//   } catch (error) {
//     console.log(error);
//   }
// };
