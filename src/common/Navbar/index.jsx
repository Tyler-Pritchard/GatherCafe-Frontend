import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../Components/GoogleAuth";
import { ReactComponent as CartIcon} from '../../Icons/SVG/shopping-cart.svg'

import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div
            className="navbar"
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
          >
                <div className="navbar__logo-box">
                <Link to="/">
                  <img
                    className="navbar__logo"
                    src={"/images/logo-black-small.jpg"}
                    alt="Galvanize Home"
                     />
                </Link>
                </div>
              
              <ul className="navbar__container">

              <li className="navbar__item">
                <Link to="/menu">Menu List</Link>
              </li>

              <li className="navbar__item">
                <Link to="/catering">Catering</Link>
              </li>

              <li className="navbar__item">
                <Link to="/cart">
                    <svg class="cart__icon">
                      <CartIcon />
                    </svg>
                </Link>
              </li>

              <li className="navar__buttons" position="right">
                <Button inverted={!fixed}>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  <Link to="/userprofile">Sign Up</Link>
                </Button>
              </li>
              <li position="right">
                {" "}
                <GoogleAuth />{" "}
              </li>
            </ul>
          </div>
        </Visibility>

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
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          className="navbar__side-bar"
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <div className="navbar__logo-box">
                <Link to="/">
                  <img
                    className="navbar__logo"
                    src={"/images/logo-black-small.jpg"}
                    alt="Galvanize Home"
                     />
                </Link>
                </div>

          <Menu.Item>
            <Link to="/menu">Menu List</Link>
          </Menu.Item>

          <Menu.Item>Catering</Menu.Item>

          <Menu.Item>
            <Link to="/cart">Cart</Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 10, padding: "1em 0em" }}
            vertical
          >
            <Container class="navbar">
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button inverted style={{ marginLeft: "0.5em" }}>
                    <Link to="/userprofile">Sign Up</Link>
                  </Button>
                </Menu.Item>
                {/* <Menu.Item position="right"> <GoogleAuth /> </Menu.Item> */}
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
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

const Navbar = () => <ResponsiveContainer />;
export default Navbar;
