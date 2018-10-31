import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";
import PageBody from "../components/PageBody";

import "./css/AboutPage.css";

import avatar from "../assets/gritty.jpg";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock />
        <PageBody>
          <img className="AboutPage__avatar" src={avatar} />
          <h1 className="AboutPage__title">About Gritty</h1>
          <hr className="AboutPage__divider" />
          <p className="AboutPage__bio">
            I don't like writing about myself, but here's what my beloved
            Philadelphia Flyers have to say about me:
          </p>
          <blockquote className="AboutPage__bio">
            His father was a "bully," so naturally he has some of those
            tendencies - talented but feisty, a fierce competitor, known for his
            agility given his size. He's loyal but mischievous; the ultimate
            Flyers fan who loves the orange and black, but is unwelcoming to
            anyone who opposes his team. Legend has it he earned the name
            "Gritty" for possessing an attitude so similar to the team he
            follows.
          </blockquote>
          <blockquote className="AboutPage__bio">
            He claims that he's been around for a lot longer than we know it,
            and recent construction at the Wells Fargo Center disturbed his
            secret hideout forcing him to show his face publicly for the first
            time. He has some oddities that are both humorous and strange. A
            number of times he's been caught eating snow straight from the
            Zamboni machine, and unbeknown to most, his love of hot dogs has
            been inflating the Flyers Dollar Dog Night consumption totals for
            years.
          </blockquote>
          <blockquote className="AboutPage__bio">
            That being said, there's no denying that he's one of our own.
          </blockquote>
        </PageBody>
      </Layout>
    );
  }
}

export default AboutPage;
