import React, { Component } from "react";

import "./css/Footer.css";

import love from "../assets/love.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <span>Made with </span>
        <img className="Footer__love-logo" src={love} />
        <span> by Ivana & Ryan</span>
      </div>
    );
  }
}

export default Footer;
