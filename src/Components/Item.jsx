import React from "react";
import { Button } from "semantic-ui-react";
import LazyImage from "../common/LazyImage";

const Item = props => {
  let { name, description, price, image_url } = props.item;
  return !props.item ? null : (
    <div class="card">
        <div class="card__picture">
        <LazyImage src={image_url} size="large" rounded />
        </div>
        <div class="card__heading-span">
          <div class="card__heading">{name}</div>
          <div class="card__details">{description}</div>
          <h4>{price}</h4>
        </div>
        <Button class="btn" onClick={() => props.add(props.item)}>Add</Button>
    </div>
  );
};

export default Item;
