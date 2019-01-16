import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import LazyImage from "../common/LazyImage";

const Item = props => {
  let { name, description, price, image_url } = props.item;
  return !props.item ? null : (
    <div>
      <Card fluid link raised className="itemCard">
        <LazyImage src={image_url} size="" rounded />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
          <Card.Meta>{price}</Card.Meta>
        </Card.Content>
        <Button onClick={() => props.add(props.item)}>Add</Button>
      </Card>
    </div>
  );
};

export default Item;
