import React, { Component } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

import "./css/Layout.css";

class Template extends Component {
  getPageTitle = path => {
    switch (path) {
      case "/about":
        return "About";
      case "/blog":
        return "Blog";
      case "/contact":
        return "Contact";
      case "/":
        return "Hi!";
      default:
        break;
    }
  };
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const className = location.pathname === rootPath ? "is-homepage" : "";
    const layoutCN = "Layout " + className;
    const pageTitle = this.getPageTitle(location.pathname);

    return (
      <div className={layoutCN}>
        <StaticQuery
          query={graphql`
            query LayoutQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => (
            <Helmet
              htmlAttributes={{ lang: "en" }}
              meta={[
                {
                  name: "description",
                  content: data.site.siteMetadata.description,
                },
              ]}
              title={`${data.site.siteMetadata.title} | ${pageTitle}`}
            />
          )}
        />
        <Header className={className} />
        {children}
        {location.pathname !== rootPath && <Footer />}
      </div>
    );
  }
}

export default Template;
