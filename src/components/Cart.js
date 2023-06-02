import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "./Message";
import { addToCart, removeFromCart } from "../actions/ProductAction";
import Header from "./Header";
// import "../myStyle.css";

const Cart = () => {
  const { id: productId } = useParams();
  const [cartValue, setCartValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.products);
  // const cart = JSON.parse(localStorage.getItem("cartItems"));
  console.log("CART =", cart);
  const { cartItems } = cart;
  console.log("cartItems = ", cartItems);
  useEffect(() => {
    if (productId) {
      // debugger;
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const checkoutHandler = () => {
    if (2 == 2) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=shipping");
    }
  };

  useEffect(() => {
    <Header cv={cartValue} />;
  }, [cartValue]);
  return (
    <>
      <Header />
      <div className="container">
        <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <Message>
                Your cart is empty <Link to="/"> Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {Object.values(cartItems).map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/details/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(addToCart(item.product, e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card className="checkOutCard">
              <ListGroup.Item variant="flush">
                <h2>
                  Subtotal({cartItems.reduce((acc, item) => +acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block checkOutBtn btn-primary rounded"
                  disabled={cartItems.length === 0}
                  onClick={() => navigate("/checkout")}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
