import React from "react";

import { Card, Button } from "semantic-ui-react";

const Menu = props => {
  let { name } = props.menu;
  console.log(props, "THESE ARE THE MENU PROPS");

  return !props.menu ? null : (
    <div>
      <Card fluid link raised>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Button>{name}</Button>
      </Card>
    </div>
  );
};

export default Menu;
