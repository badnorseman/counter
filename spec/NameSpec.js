"use strict";
import React from "react/addons";
import Name from "../app/scripts/Name";

var TestUtils = React.addons.TestUtils;

describe("Name", () => {
  var component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<Name name="Dan" />);
  });

  it("should display the correct name", () => {
    expect(component.getDOMNode().textContent).toMatch(/Dan/);
  });
});