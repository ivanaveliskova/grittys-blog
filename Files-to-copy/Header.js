import React, { Component } from "react";
import { Link } from "gatsby";

import "./css/Header.css";

class Header extends Component {
  state = {
    menuOpen: false,
  };

  handleClick = () => {
    this.setState(state => {
      const menuOpen = state.menuOpen === false ? true : false;

      return { menuOpen };
    });
  };

  renderMenu = () => {
    return (
      <div className="Header__menu">
        <div className="Header__link-list" onClick={this.handleClick}>
          <Link className="Header__link" to="/">
            Home
          </Link>
          <Link className="Header__link" to="/blog">
            Blog
          </Link>
          <Link className="Header__link" to="/about">
            About
          </Link>
          <Link className="Header__link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    );
  };

  render() {
    const { className } = this.props;
    const { menuOpen } = this.state;

    const blur = menuOpen ? "is-blurred" : "";

    const cn = "Header " + className + " " + blur;

    return (
      <div className={cn}>
        <Link className="Header__name" to="/">
          Gritty
        </Link>
        <div className="Header__nav" onClick={this.handleClick}>
          <div className="Header__nav-hamburger" />
        </div>
        {menuOpen && this.renderMenu()}
      </div>
    );
  }
}

export default Header;
