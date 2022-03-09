import React from "react";
import Error from "@material-ui/icons/Error";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return <div className="PageNotFound">
      <Error/>
      <Typography>Page Not Found</Typography>
      <Link to="/">Home</Link>
    </div>;
} 

export default NotFound;
