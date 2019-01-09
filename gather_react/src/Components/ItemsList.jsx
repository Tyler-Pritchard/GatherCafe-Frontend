import React from "react";
import Item from "./Item";
const ItemsList = props => {
  console.log(props);
  const itemsArray = props.items.map(item => {
    return <Item item={item} />;
  });
  return <div>{itemsArray}</div>;
};
export default ItemsList;
