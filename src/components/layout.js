import React from "react";
import { Link } from "gatsby";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={"/"}>Gatsby Starter Blog</Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={"/"}>Gatsby Starter Blog</Link>
        </h3>
      );
    }
    return (
      <div>
        {header}
        {children}
      </div>
    );
  }
}

export default Template;
