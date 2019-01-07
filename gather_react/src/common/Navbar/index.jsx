import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

export class Navbar extends Component {
  componentDidMount() {}
  render() {
    const activeItem = this.props.location.pathname;
    return (
      <Menu id="navbar">
        <Menu.Item
          name="Menu"
          active={activeItem === "/"}
          onClick={this.handleItemClick}
        >
          <Link to="/menu">Menu</Link>
        </Menu.Item>

        <Menu.Item
          name="Cart"
          active={activeItem === "/cart"}
          onClick={this.handleItemClick}
        >
          <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Container>
          <h1 id="navHead">G@TH3R</h1>
        </Container>
        <Menu.Item
          name="UserProfileForm"
          active={activeItem === "/login"}
          onClick={this.handleItemClick}
        >
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item
          name="UserProfileForm"
          active={activeItem === "/signup"}
          onClick={this.handleItemClick}
        >
          <Link to="/userprofile">Sign Up</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
