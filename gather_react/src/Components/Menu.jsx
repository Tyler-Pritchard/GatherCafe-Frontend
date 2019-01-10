import React from "react";
import { Button, Image, List } from "semantic-ui-react";

class Menu extends React.Component {
  // async componentDidMount() {
  //   let menusJSON = await fetch("http://localhost:5000/menus");
  //   let menus = await menusJSON.json();
  //   console.log(menus);
  // }
  render() {
    return (
      <List divided verticalAlign="middle">
        <List.Item>
          {/* <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image avatar src="/images/avatar/small/lena.png" />
          <List.Content>Item</List.Content>
          <List.Content>$Price</List.Content>
          <List.Content>Description</List.Content>
          addon checkbox */}
        </List.Item>
      </List>
    );
  }
}

export default Menu;
