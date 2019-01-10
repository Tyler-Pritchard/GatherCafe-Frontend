import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const Menu = props => {
  console.log(props);
  let { name, description, image_url } = props.menu;
  return !props.menu ? null : (
    <div>
      <Card fluid link raised>
        <Image src={image_url} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Button>{name}</Button>
      </Card>
    </div>
  );
};

export default Menu;
