import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class UserProfile extends Component {
  render() {
    return (
      <Segment inverted>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input fluid label="First Name" placeholder="First name" />
            <Form.Input fluid label="Last Name" placeholder="Last Name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="User Name" placeholder="User Name" />
            <Form.Input fluid label="Email" placeholder="Email" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Password" placeholder="Password" />
            <Form.Input fluid label="Repeat Password" placeholder="Password" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}
export default UserProfile;
