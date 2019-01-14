import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import LazyImage from "../common/LazyImage";

const Item = props => {
  console.log(props, "THESE ARE THE PROPS YOU ARE LOOKING FOR");
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
        <Button>Add</Button>
      </Card>
    </div>
  );
};

export default Item;
