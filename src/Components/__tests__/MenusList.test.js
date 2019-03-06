import React from "react";
import { mount } from "enzyme";
import MenusList from "Components/MenusList";

let wrapped;

befereEach(() => {
  wrapped = mount(<MenusList />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows a list of menus", () => {
  const wrapped = mount(<MenuList />);

  //TODO: expect(wrapped.find("menuslist").length).toEqual(1);
});
