import React from "react";
import { Card, Image } from "semantic-ui-react";

const Item = props => {
  console.log(props);
  let { name, description, price, photo_url } = props.item;
  return !props.item ? null : (
    <div>
      <Card>
        <Image src={photo_url} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{price}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
