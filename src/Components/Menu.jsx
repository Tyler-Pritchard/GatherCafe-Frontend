import React from "react";

import { Card, Button } from "semantic-ui-react";

const Menu = props => {
  let { name } = props.menu;

  return !props.menu ? null : (
    <div>
      <Card style={{ marginBottom: "1em" }} fluid link raised>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Button>{name}</Button>
      </Card>
    </div>
  );
};

export default Menu;
