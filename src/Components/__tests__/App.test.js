import React from "react";
import {
  shallow
} from "enzyme";
import ReactDOM from "react-dom";
import App from "../../App";

let wrapped;

beforeEach(() => {
  wrapped = shalllow(< App />);
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
it("shows a menus list", () => {
  expect(wrapped.find(MenusList).length).toEqual(1);
});

it("shows a cart list of items", () => {
  expect(wrapped.find(Menu).length).toEqual(1);
});

it("shows a menu list of items", () => {
  expect(wrapped.find(Cart).length).toEqual(1);
});