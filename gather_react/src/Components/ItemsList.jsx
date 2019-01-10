import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
class ItemsList extends React.Component {
  render() {
    console.log(this.props);
    const itemsArray = !this.props.items
      ? []
      : this.props.items.map(item => {
          return <Item item={item} />;
        });
    return <div>{itemsArray}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state.items.data.items, "TAASDLFASDFDS");
  return { items: state.items.data.items };
};
export default connect(
  mapStateToProps,
  null
)(ItemsList);
