import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const OrderDetails = () => {
  // const customerOrders = useSelector((state) => state.products.customerOrder);
  const customerOrders = JSON.parse(localStorage.getItem("customerOrder"));
  debugger;
  console.log("customer ORDERS =", customerOrders);
  //   const [name, city, email, orders] = customerOrders[0];
  //   console.log("customerName =", name);
  //   console.log("customerCity =", city);
  //   console.log("customerEmail =", email);
  return (
    <div>
      <Header />
      <div className="container">
        <h2>OrderDetails</h2>
        <table className="table table-hover ">
          <thead>
            <tr className="table-dark">
              <th scope="col">customer Name</th>
              <th scope="col">City</th>
              <th scope="col">Email</th>
              <th scope="col">Orders</th>
            </tr>
          </thead>
          <tbody>
            {customerOrders.map((order) => {
              return (
                <tr className="table-light">
                  <td>{order.customerName}</td>
                  <td>{order.customerCity}</td>
                  <td>{order.email}</td>
                  <td>
                    {order.products.map((p) => {
                      return (
                        <ul>
                          <li>
                            {p.name}
                            <img src={p.image} className="checkoutImage" />
                          </li>
                        </ul>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
