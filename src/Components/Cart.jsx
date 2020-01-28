import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeItemInCart } from "../redux/actions/items";
import StripeCheckout from "react-stripe-checkout";

class Cart extends Component {
  state = {
    totalInCents: null
  };

  calculateSubtotal = () => {
    let totalInCents = this.props.itemsInCart.reduce((acc, agg) => {
      return acc + +agg.price;
    }, 0);
    totalInCents = totalInCents / 100;
    return totalInCents.toFixed(2);
  };

  calculateTax = () => {
    let totalInCents = this.props.itemsInCart.reduce((acc, agg) => {
      return acc + +agg.price;
    }, 0);
    totalInCents = totalInCents / 100;
    totalInCents = totalInCents.toFixed(2);
    let tax = totalInCents * .08;
    return tax.toFixed(2);
  }

  calculateTotal = () => {
    let totalInCents = this.props.itemsInCart.reduce((acc, agg) => {
      return acc + +agg.price;
    }, 0);
    totalInCents = totalInCents / 100;
    let tax = totalInCents * .08;
    let total = tax + totalInCents;
    return total.toFixed(2);
  }

  onToken = async token => {
    const chargeJSON = await fetch("https://localhost:5000/stripeCharge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // amount: totalInCents,
        token: token.id
      })
    });
    console.log(chargeJSON);
  };

  render() {
    return (
      <div className="cart">
        {this.props.itemsInCart.map(item => {
          return (
            <div className="cart__items">
              <div className="cart__item">
                <Image className="cart__image" avatar src={item.image_url} />
              <div className="cart__name">{item.name}</div>
              <div className="cart__price">${item.price}</div>
              {/* <div className="cart__quantity">${item.quantity}</div> */}
              
                <Button className="btn cart__remove btn--orange" onClick={() => this.props.removeItemInCart(item)}>
                  Remove
                </Button>
                
              </div>
            </div>
          );
        })}
        <div className="cart__display">
          <ul className="cart__subtotal">
            <li className="cart__calculate">Subtotal ${this.calculateSubtotal()}</li>
            <li className="cart__tax">Tax ${this.calculateTax()}</li>
            <li className="cart__total">Total ${this.calculateTotal()}</li>
          </ul>
          <div className="cart__checkout-button">
            {/* <Button>Checkout</Button> */}
            <StripeCheckout
              token={this.onToken}
              stripeKey={"pk_test_SAPK0hauZtBaTRT3jC6tD33F"}
              amount={10000}
            />
        </div>
          </div>
      </div>
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
