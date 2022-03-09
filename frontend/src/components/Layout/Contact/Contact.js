import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

function Contact() {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:pranjayvats22062001@gmail.com" target="blank">
        <Button>Contact: pranjayvats22062001@gmail.com</Button>
      </a>
    </div>
  );
}

export default Contact;
