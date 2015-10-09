"use strict";
var React = require("react");
var Decrementer = require("./Decrementer");
var Incrementer = require("./Incrementer");

var Counter = React.createClass({
	getInitialState: function() {
		return { count: 0 };
	},
	incrementHandler: function(count) {
		this.setState({ count: count });
	},
	decrementHandler: function(count) {
		this.setState({ count: count});
	},
	render: function() {
		return(
			<div>
				<h3>Counter</h3>
				<Decrementer count={this.state.count} onClick={this.decrementHandler} />
				<h5>{this.state.count}</h5>
				<Incrementer count={this.state.count} onClick={this.incrementHandler} />
			</div>
		);
	}
});

module.exports = Counter;