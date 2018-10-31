import React, { Component } from "react";

import Layout from "../components/layout";

import "./css/Main.css";

class Home extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="Main">
          <h1 className="Main__header">It me_</h1>
        </div>
      </Layout>
    );
  }
}

export default Home;
