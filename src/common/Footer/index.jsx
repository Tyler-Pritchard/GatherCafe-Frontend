import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  List,
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
      <div className="footer__mobile-menu"
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar.Pusher dimmed={sidebarOpened}>{children}</Sidebar.Pusher>
      </div>
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
    <Segment className="footer">
      <Container className="footer__navigation">
        <Grid divided stackable className="footer__list">
          <Grid.Row>
            <Grid.Column width={5}>
              <List link className="footer_list">
                <List.Item as="a" className="footer_item">Sitemap</List.Item>
                <List.Item as="a" className="footer_item">Contact Us</List.Item>
                <List.Item as="a" className="footer_item">Terms of service</List.Item>
                <List.Item as="a" className="footer_item">Privacy policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <List className="footer_list" link>
                <List.Item as="a" className="footer__link">Business Catering</List.Item>
                <List.Item as="a" className="footer__link">
                <Link to="/menu">Menu List</Link>
                </List.Item>
                <List.Item as="a" className="footer__link">Locaton</List.Item>
                <List.Item as="a" className="footer__link">Galvanize Home</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <h5 className="footer__address">
                Galvanize<br />
                44 Tehama Street<br />
                San Francisco, CA 94105<br />
                (415) 805-1888
              </h5>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default Footer;
