import { useDispatch } from "react-redux";
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

export const addToCart = (product) => async (dispatch) => {
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
    const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
    debugger;
    const updatedCartItems = currentCartItems.push(product);
    debugger;
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
    localStorage.setItem("customerOrder", JSON.stringify(order));
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
  } catch (error) {
    console.log("Error here =", error);
  }
};

export const removeFromCart = (products) => async (dispatch) => {
  // debugger;
  try {
    // dispatch({
    //   type: "PRODUCT_LIST",
    //   payload: products,
    // });
    // // debugger;
    // localStorage.setItem("listOfProducts", JSON.stringify(products));
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
