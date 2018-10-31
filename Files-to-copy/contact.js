import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";
import PageBody from "../components/PageBody";

import earthSVG from "../assets/earth.svg";
import twtitterSVG from "../assets/twitter.svg";
import instagramSVG from "../assets/instagram.svg";

import "./css/Contact.css";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock title="Come @ Me" />
        <PageBody>
          <h2 className="Contact__header">Let's be friends!</h2>
          <ul className="Contact__list">
            <li className="Contact__list-item">
              <a
                className="Contact__link"
                href="https://www.nhl.com/flyers/fans/gritty"
              >
                <img className="Contact__social-icon" src={earthSVG} />
                <span className="Contact__link-label">Hire me</span>
              </a>
            </li>
            <li className="Contact__list-item">
              <a className="Contact__link" href="https://twitter.com/GrittyNHL">
                <img className="Contact__social-icon" src={twtitterSVG} />
                <span className="Contact__link-label">Tweet Me</span>
              </a>
            </li>
            <li className="Contact__list-item">
              <a
                className="Contact__link"
                href="https://www.instagram.com/grittynhl"
              >
                <img className="Contact__social-icon" src={instagramSVG} />
                <span className="Contact__link-label">Insta Me</span>
              </a>
            </li>
          </ul>
        </PageBody>
      </Layout>
    );
  }
}

export default ContactPage;
