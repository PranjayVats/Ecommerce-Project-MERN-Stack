import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../Layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Ecommerce" />

          <div className="banner">
            <p>WELCOME TO ECOMMERCE SITE</p>
            <h1>Find All Amazing Products</h1>
            <a href="#container">
              <button>
                <CgMouse size='20px'/>
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard  key={product._id} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
