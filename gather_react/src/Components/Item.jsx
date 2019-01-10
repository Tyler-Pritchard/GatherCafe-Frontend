import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const Item = props => {
  console.log(props);
  let { name, description, price, image_url } = props.item;
  return !props.item ? null : (
    <div>
      <Card fluid link raised>
        <Image src={image_url} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
          <Card.Meta>{price}</Card.Meta>
        </Card.Content>
        <Button>Add</Button>
      </Card>
    </div>
  );
};

export default Item;
