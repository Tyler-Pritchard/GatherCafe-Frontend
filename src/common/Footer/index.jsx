import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Images/Logos/logo-black-medium.jpg"

import {
  Container,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => <Container text />;

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        {children}
      </Responsive>
    );
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive className="footer__mobile-menu"
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar.Pusher dimmed={sidebarOpened}>{children}</Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Footer = () => (
  <ResponsiveContainer>
    <Segment>
      <Container className="footer">

        <div className="footer__logo-box">
          <img 
            src={"../../Images/Logos/logo-black-medium.jpg"}
            className="footer__logo"
            alt="Galvanize"
          />
        </div>

        <div className="row">

          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a 
                    target="_blank" 
                    className="footer__link"
                    href="http://www.galvanize.com"
                  >
                    Company
                  </a>
                  <a target="_blank" className="footer__link">
                    Contact Us
                  </a>
                  <a target="_blank" className="footer__link">
                    Careers
                  </a>
                  <a target="_blank" className="footer__link">
                    Privacy
                  </a>
                  <a target="_blank" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <p className="footer__copyright">
              Copyright &copy;  
              <a 
              target="_blank" href="https://www.tylerrobertpritchard.com">
              Tyler Pritchard, 2020
              </a>

            </p>
          </div>
        </div>

      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default Footer;
