import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../products/products";
import Rating from "./Rating";
import { addToCart } from "../actions/ProductAction";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Header from "./Header";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("product ID", id);
  const productsFromLocalStorage = JSON.parse(
    localStorage.getItem("listOfProducts")
  );
  const dispatch = useDispatch();
  const product = productsFromLocalStorage.filter((p) => p.id == id);
  const myProductObject = product[0];
  //   console.log("FilteredPRoduct =", product[0]);
  //   console.log("FilteredPRoduct OBJECT =", myProductObject);

  const addToCartHandler = (id) => {
    // alert(qty);
    myProductObject.qty = qty;
    debugger;

    dispatch(addToCart(myProductObject));
    navigate("/cart");
  };

  return (
    <>
      <Header />
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product[0].image} alt={product[0].name} fluid />
        </Col>

        <Col onMouseDown={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product[0].name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product[0].rating}
                text={`${product[0].numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price:${product[0].price} </ListGroup.Item>
            <ListGroup.Item>
              Description:${product[0].description}{" "}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${product[0].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col> Status </Col>
                  <Col>
                    {product[0].countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {product[0].countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col style={{ margin: "10px 0 0 10px" }}> Qty </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product[0].countInStock).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <Button
                  className="btn-block cartBtn btn-primary rounded"
                  type="button"
                  disabled={product[0].countInStock === 0}
                  onClick={() => addToCartHandler(product[0].id)}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
