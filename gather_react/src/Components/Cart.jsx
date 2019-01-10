import React from "react";
import { Button, Image, List } from "semantic-ui-react";

const Cart = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button>Remove</Button>
      </List.Content>
      <Image avatar src="/images/avatar/small/lena.png" />
      <List.Content>Item</List.Content>
      <List.Content>$Price</List.Content>
    </List.Item>
    <div id="displayTotal">
      <List.Item>
        <List.Content>$Subtotal</List.Content>
        <List.Content>$Tax</List.Content>
        <List.Content>$Total</List.Content>
        <List.Content floated="right">
          <Button>Checkout</Button>
        </List.Content>
      </List.Item>
    </div>
  </List>
);

export default Cart;
