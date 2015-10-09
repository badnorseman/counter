"use strict";
import React from "react/addons";
import Counter from "../app/scripts/Counter";

describe("Counter", () => {

	let TestUtils = React.addons.TestUtils;

	describe("incrementHandler", () => {
		let instance = TestUtils.renderIntoDocument(<Counter />);
	  instance.incrementHandler(2);

	  it("should add 2", () => {
	    expect(instance.state.count).toBe(2);
	  });
	});

	describe("decrementHandler", () => {
		let instance = TestUtils.renderIntoDocument(<Counter />);
	  instance.decrementHandler(-2);

	  it("should substract 2", () => {
	    expect(instance.state.count).toBe(-2);
	  });
	});
});