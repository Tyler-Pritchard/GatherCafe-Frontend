import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Container } from "semantic-ui-react";

class MenusList extends React.Component {
  render() {
    const menusArray = !this.props.menus
      ? []
      : this.props.menus.map(menu => {
          return (
            <div>
              <Link to={`${menu.name}`}>
                <Menu menu={menu} />
              </Link>
            </div>
          );
        });
    return (
      <div className="menuList">
        <Container text className="menuList__item">
          {menusArray}
        </Container>
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
