import React, { Component } from "react";
import { Button, Image, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeItemInCart } from "../redux/actions/items";
import StripeCheckout from "react-stripe-checkout";

class Cart extends Component {
  state = {
    totalInCents: null
  };

  calculateTotal = () => {
    let totalInCents = this.props.itemsInCart.reduce((acc, agg) => {
      return acc + +agg.price;
    }, 0);
    return totalInCents / 100;
  };

  onToken = async token => {
    const chargeJSON = await fetch("http://localhost:5000/stripeCharge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: totalInCents,
        token: token.id
      })
    });
    console.log(chargeJSON);
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
              <List.Content>${item.quantity}</List.Content>
            </List.Item>
          );
        })}
        <div id="displayTotal">
          <List.Item>
            <List.Content>{this.calculateTotal()}</List.Content>
            <List.Content>$Tax</List.Content>
            <List.Content>$Total</List.Content>
            <List.Content floated="right">
              {/* <Button>Checkout</Button> */}
              <StripeCheckout
                token={this.onToken}
                stripeKey={"pk_test_SAPK0hauZtBaTRT3jC6tD33F"}
                amount={10000}
              />
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
