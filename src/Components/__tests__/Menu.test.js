import React from "react";
import { mount } from "enzyme";
import Menu from "Components/Menu";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Menu />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows a list of menu items", () => {
  const wrapped = mount(<Menu />);

  //TODO: expect menu items, add/delete buttons
  //expect(wrapped.find("itemsList").length).toEqual(1);
  //expect(wrapped.find("add buttons").length).toEqual(?????);
});
