import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { Container } from "semantic-ui-react";
class MenusList extends React.Component {
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
  console.log(state.menus.data.menus, "TAASDLFASDFDS");
  return { menus: state.menus.data.menus };
};
export default connect(
  mapStateToProps,
  null
)(MenusList);
