import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { Container } from "semantic-ui-react";
import { addItemToCart, removeItemInCart } from "../redux/actions/items";

class ItemsList extends React.Component {
  state = { name: null, menu_id: null };

  addItemToCart = item => {
    this.props.addItemToCart(item);
  };

  removeItemInCart = item => {
    this.props.removeItemInCart(item);
  };

  render() {
    console.log(this.props, "THESE ARE THE ITEM LIST PROPS");
    const itemsArray = this.props.items.map(item => {
      if (item.menu_id === this.props.menu_id) {
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
    return <Container text>{itemsArray}</Container>;
  }
}
const mapStateToProps = state => {
  return { items: state.items.data };
};
export default connect(
  mapStateToProps,
  { addItemToCart, removeItemInCart }
)(ItemsList);
