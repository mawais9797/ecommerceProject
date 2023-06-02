import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, orderDetails } from "../actions/ProductAction";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cartItems);
  //   console.log("cartItems =", cartItems);
  var customerOrder = {};
  const handleSubmit = (values) => {
    customerOrder = values;
    customerOrder.products = cartItems;
    console.log("customerOrder =", customerOrder);
    // Handle form submission logic here
    console.log("form values =", values);
    dispatch(orderDetails(customerOrder));
    // dispatch(emptyCart());
    navigate("/orderdetails");
  };
  //   store.dispatch((dispatch) => {
  //     dispatch(orderDetails(customerOrder));
  //     dispatch();
  //   });
  return (
    <div>
      <Header />
      <div className="container ">
        <h1 className="checkoutForm">Checkout</h1>
        <Formik
          initialValues={{
            customerName: "",
            customerCity: "",
            email: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="checkoutForm">
            <fieldset>
              <div className="form-group">
                <label htmlFor="customerName" className="form-label mt-4">
                  Customer Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="customerName"
                  name="customerName"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerCity" className="form-label mt-4">
                  City
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="customerCity"
                  name="customerCity"
                  placeholder="Enter city..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label mt-4">
                  Email
                </label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <h3>Your Shopping</h3>
              <table className="table table-hover ">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Product ID</th>
                    <th scope="col">ProductName</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <tr className="table-light">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <img src={item.image} className="checkoutImage" />
                        </td>
                        <td>{item.qty}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <button type="submit" className="btn btn-primary btn-md rounded">
                Submit
              </button>
            </fieldset>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
