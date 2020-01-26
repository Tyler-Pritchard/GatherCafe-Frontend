import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Responsive
        style={{ position: "bottom", marginTop: "40em" }}
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
    <Segment class="footer">
      <Container class="footer__navigation">
        <Grid divided stackable class="footer__list">
          <Grid.Row>
            <Grid.Column width={5}>
              <List link class="footer_list">
                <List.Item as="a" class="footer_item footer__link">Sitemap</List.Item>
                <List.Item as="a" class="footer_item footer__link">Contact Us</List.Item>
                <List.Item as="a" class="footer_item footer__link">Terms of service</List.Item>
                <List.Item as="a" class="footer_item footer__link">Privacy policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <List class="footer_list" link>
                <List.Item as="a" class="footer__link">Business Catering</List.Item>
                <List.Item as="a" class="footer__link">
                <Link to="/menu">Menu List</Link>
                </List.Item>
                <List.Item as="a" class="footer__link">Locaton</List.Item>
                <List.Item as="a" class="footer__link">Galvanize Home</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <h5 class="footer__address">
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
