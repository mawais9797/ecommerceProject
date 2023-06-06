import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, fa6 } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  // debugger;
  const [showPopup, setShowPopup] = useState(true);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  var cartLength = 0;
  // // // console.log(cart);
  // // const number = cartItems.reduce((acc, item) => acc + item.qty, 0);
  var tp = 0;
  cartItems.map((x) => {
    tp = Number(tp) + Number(x.qty);
  });
  cartLength = tp;
  // debugger;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                {/* <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="/cart">
                  <BiCart />
                  Cart
                </Link>
              </li> */}
            </ul>
            <div>
              <Link to="/cart" className="myCart">
                <FontAwesomeIcon icon={faCartShopping} /> Cart ({cartLength})
                {showPopup && (
                  <div className="popup">
                    {cartItems.map((item) => {
                      return (
                        <ul>
                          <Link to={`/details/${item.id}`} className="liCart">
                            <li>
                              {" "}
                              {item.qty}{" "}
                              <img src={item.image} className="checkoutImage" />
                              {item.name}{" "}
                            </li>
                          </Link>
                        </ul>
                      );
                    })}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
