import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { Container } from "semantic-ui-react";
class ItemsList extends React.Component {
  render() {
    const itemsArray = !this.props.items
      ? []
      : this.props.items.map(item => {
          return <Item item={item} />;
        });
    return <Container text>{itemsArray}</Container>;
  }
}
const mapStateToProps = state => {
  return { items: state.items.data.items };
};
export default connect(
  mapStateToProps,
  null
)(ItemsList);
