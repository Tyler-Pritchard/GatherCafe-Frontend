import React from "react";
import { mount } from "enzyme";
import Cart from "Components/Cart";

let wrapped;

beforeEach(() => {
  wrapped = mount(() => {
    mount(<Cart />);
  });
});

afterEach(() => {
  wrapped.unmount();
});

it("has a list of items and checkout button", () => {
  const wrapped = mount(<Cart />);

  //TODO expect(wrapped.find("itemsList").length).toEqual(1);
  //expect(wrapped.find("button").length).toEqual(1);
});
