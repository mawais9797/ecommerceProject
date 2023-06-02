import React, { useEffect } from "react";
import Header from "./Header";
import products from "../products/products";
import { listOfProduct } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../images/airpods.jpg";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   debugger;
  //   const productListing = useSelector((state) => state.products.listOfProducts);

  const listing = useSelector((state) => state.products);
  const listFromStore = listing.listOfProducts;
  const listFromLocalStorage = localStorage.getItem("listOfProducts")
    ? JSON.parse(localStorage.getItem("listOfProducts"))
    : [];
  // console.log("productListing =", listFromStore);
  console.log("listFromLocalStorage =", listFromLocalStorage);

  //   dispatch(listOfProduct(products));

  useEffect(() => {
    dispatch(listOfProduct(products));
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <h3>ProductList</h3>

        {listFromLocalStorage.map((card) => {
          return (
            <div className="card mb-3 productCard">
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <h6 className="card-subtitle text-muted">
                  Support card subtitle
                </h6>
              </div>
              <img
                src={card.image}
                className="d-block user-select-none"
                width="100%"
                height="200"
                aria-label="Placeholder: Image cap"
                focusable="false"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 318 180"
                style={{ fontSize: "1.125rem", textAnchor: "middle" }}
              />
              {/* <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image cap
                </text>
              </img> */}
              <div className="card-body">
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => navigate(`/details/${card.id}`)}
                >
                  View Product
                </button>
              </div>

              <div className="card-footer text-muted">2 days ago</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
