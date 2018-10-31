import React, { Component } from 'react'

import Layout from '../components/layout'
import HeroBlock from '../components/HeroBlock'
import PageBody from '../components/PageBody'

import EarthSVG from '!svg-react-loader!../assets/earth.svg?name=EarthSVG'
import TwitterSVG from '!svg-react-loader!../assets/twitter.svg?name=TwitterSVG'
import InstagramSVG from '!svg-react-loader!../assets/instagram.svg?name=InstagramSVG'

import '../components/Contact.css'

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
                <EarthSVG className="Contact__social-icon" />
                <span className="Contact__link-label">Hire me</span>
              </a>
            </li>
            <li className="Contact__list-item">
              <a className="Contact__link" href="https://twitter.com/GrittyNHL">
                <TwitterSVG className="Contact__social-icon" />
                <span className="Contact__link-label">Tweet Me</span>
              </a>
            </li>
            <li className="Contact__list-item">
              <a
                className="Contact__link"
                href="https://www.instagram.com/grittynhl"
              >
                <InstagramSVG className="Contact__social-icon" />
                <span className="Contact__link-label">Insta Me</span>
              </a>
            </li>
          </ul>
        </PageBody>
      </Layout>
    )
  }
}

export default ContactPage
