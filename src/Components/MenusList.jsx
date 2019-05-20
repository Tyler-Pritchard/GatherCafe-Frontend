import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import Navbar from "../common/Navbar/index";
import { Container } from "semantic-ui-react";

class MenusList extends React.Component {
  render() {
    return <div>{Navbar}</div>;
  }

  render() {
    const menusArray = !this.props.menus
      ? []
      : this.props.menus.map(menu => {
          return <Menu menu={menu} />;
        });
    return <Container text>{menusArray}</Container>;
  }
}
const mapStateToProps = state => {
  return { menus: state.menus.data.menus };
};
export default connect(
  mapStateToProps,
  null
)(MenusList);
