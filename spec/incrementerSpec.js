"use strict";
import React from "react/addons";
import Incrementer from "../app/scripts/Incrementer";

let TestUtils = React.addons.TestUtils;

describe("Incrementer", () => {

	let count = 2;
  let instance = TestUtils.renderIntoDocument(<Incrementer count={count} />);

  it("should equal 2", () => {
  	expect(instance.props.count).toBe(2);
  });
});