import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderDetails from "./components/OrderDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
