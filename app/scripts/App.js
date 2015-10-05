"use strict";
require("../styles/app.css");
var React = require("react");
var Counter = require("./Counter");

React.render(
	<Counter />,
	document.getElementById("app")
);