import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "../../App";

let wrapped;

beforeEach(() => {
  wrapped = shalllow(<App />);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
