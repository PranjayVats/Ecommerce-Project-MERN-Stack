import React, { Fragment } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <Fragment>
      <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Your Order has been placed Successfuly!</Typography>
        <Link to="/orders">View Orders</Link>
      </div>
    </Fragment>
  );
}

export default OrderSuccess;
