import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { Container } from "semantic-ui-react";

class MenusList extends React.Component {
  render() {
    const menusArray = !this.props.menus
      ? []
      : this.props.menus.map(menu => {
          return (
            <div>
              <Menu menu={menu} />
            </div>
          );
        });
    return (
      <div>
        <Container text>{menusArray}</Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { menus: state.menus.data.menus };
};
export default connect(
  mapStateToProps,
  null
)(MenusList);
