import React, { Component } from "react";

import "./css/PageBody.css";

class PageBody extends Component {
  render() {
    const { children } = this.props;

    return <div className="PageBody">{children}</div>;
  }
}

export default PageBody;
