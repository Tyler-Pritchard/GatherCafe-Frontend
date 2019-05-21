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
      console.log(item, "THESE ARE THE ITEM PROPS");
      console.log(this.state, "these are the prosp");
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
