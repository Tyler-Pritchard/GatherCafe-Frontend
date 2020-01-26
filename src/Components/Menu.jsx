import React from "react";

const Menu = props => {
  let { name } = props.menu;

  return !props.menu ? null : (
    <div>
      <div className="feature-box">
        <button className="btn btn--animated btn--orange btn-text">{name}</button>
      </div>
    </div>
  );
};

export default Menu;
