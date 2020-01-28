import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { Container } from "semantic-ui-react";
import { addItemToCart, removeItemInCart } from "../redux/actions/items";

class ItemsList extends React.Component {
  addItemToCart = item => {
    this.props.addItemToCart(item);
  };

  removeItemInCart = item => {
    this.props.removeItemInCart(item);
  };

  render() {
    const itemsArray = this.props.items.map(item => {
      if (item.menu_id == this.props.meal) {
        return (
          <Item
            key={item.name}
            item={item}
            add={this.addItemToCart}
            remove={this.removeItemInCart}
          />
        );
      }
    });
    return (
      <div className="itemsList">
        <Container text>{itemsArray}</Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { items: state.items.data };
};
export default connect(
  mapStateToProps,
  { addItemToCart, removeItemInCart }
)(ItemsList);
