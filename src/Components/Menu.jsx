import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

const Menu = props => {
  //TODO URL NOT BEING PASSED
  console.log(props, "YO HERE BE MY PROPS");
  let { name, url } = props.menu;

  return !props.menu ? null : (
    <div>
      <Card fluid link raised>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Button>
          <Link to={{ url }}>{name}</Link>
        </Button>
      </Card>
    </div>
  );
};

export default Menu;
