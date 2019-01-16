import React, { Component } from "react";
import { Button, Image, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeItemInCart } from "../redux/actions/items";
class Cart extends Component {
  calculateTotal = () => {
    let totalInCents = this.props.itemsInCart.reduce((acc, agg) => {
      return acc + +agg.price;
    }, 0);
    return totalInCents / 100;
  };

  render() {
    return (
      <List divided verticalAlign="middle">
        {this.props.itemsInCart.map(item => {
          return (
            <List.Item>
              <List.Content floated="right">
                <Button onClick={() => this.props.removeItemInCart(item)}>
                  Remove
                </Button>
              </List.Content>
              <Image avatar src={item.image_url} />
              <List.Content>{item.name}</List.Content>
              <List.Content>${item.price}</List.Content>
            </List.Item>
          );
        })}
        <div id="displayTotal">
          <List.Item>
            <List.Content>{this.calculateTotal()}</List.Content>
            <List.Content>$Tax</List.Content>
            <List.Content>$Total</List.Content>
            <List.Content floated="right">
              <Button>Checkout</Button>
            </List.Content>
          </List.Item>
        </div>
      </List>
    );
  }
}

const select = state => ({
  itemsInCart: state.cart.itemsInCart
});

export default connect(
  select,
  { removeItemInCart }
)(Cart);
