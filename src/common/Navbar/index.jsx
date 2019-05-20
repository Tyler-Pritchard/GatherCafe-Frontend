// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import { Menu, Container, Image } from "semantic-ui-react";

// export class Navbar extends Component {
//   componentDidMount() {}
//   render() {
//     const activeItem = this.props.location.pathname;
//     return (
//       <Menu id="navbar">
//         <Link to="/">
//           <Image
//             src="https://s3-us-west-1.amazonaws.com/gather-menu/Galvanize---Galvanize-Logo---_G_-only.png"
//             className="navLogo"
//           />
//         </Link>
//         <Menu.Item
//           name="Menu"
//           active={activeItem === "/"}
//           onClick={this.handleItemClick}
//         >
//           <Link to="/menu">Menu</Link>
//         </Menu.Item>

//         <Menu.Item
//           name="Cart"
//           active={activeItem === "/cart"}
//           onClick={this.handleItemClick}
//         >
//           <Link to="/cart">Cart</Link>
//         </Menu.Item>
//         <Container>
//           <div className="navBarLogo">
//             <h1 id="navHead">
//               <Link to="/">
//                 GATHER CAFE @{" "}
//                 <Image
//                   src="https://s3-us-west-1.amazonaws.com/gather-menu/Galvanize---Galvanize-logomark---text-only-2.png"
//                   className="galFullWord"
//                 />
//               </Link>
//             </h1>
//           </div>
//         </Container>
//         <Menu.Item
//           name="UserProfileForm"
//           active={activeItem === "/login"}
//           onClick={this.handleItemClick}
//         >
//           <Link to="/login">Login</Link>
//         </Menu.Item>
//         <Menu.Item
//           name="UserProfileForm"
//           active={activeItem === "/signup"}
//           onClick={this.handleItemClick}
//         >
//           <Link to="/userprofile">Sign Up</Link>
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }

// export default withRouter(Navbar);

//========================================//

import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => <Container text />;

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item>
                <Link to="/">
                  <Image
                    src="https://s3-us-west-1.amazonaws.com/gather-menu/Galvanize---Galvanize-Logo---_G_-only.png"
                    className="navLogo"
                  />
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link to="/menu">Menu</Link>
              </Menu.Item>

              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
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
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
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

const HomepageLayout = () => <ResponsiveContainer />;
export default HomepageLayout;
