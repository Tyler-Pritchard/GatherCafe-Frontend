import React from "react";
import { Button } from "semantic-ui-react";
import LazyImage from "../common/LazyImage";

const Item = props => {
  let { name, description, price, image_url } = props.item;
  return !props.item ? null : (


    <div className="card">

      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1">
          <LazyImage 
          className="card__image"
          src={image_url} />
          &nbsp;
        </div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {name}
          </span>
        </h4>
      </div>

        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__details">
              <p>{description}</p>
            </div>
            <div className="card__price-box">
              <p className="card__price-value">{price}</p>
              <Button className="btn" onClick={() => props.add(props.item)}>Add</Button>
              <Button className="btn" onClick={() => props.add(props.item)}>Remove</Button>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Item;
