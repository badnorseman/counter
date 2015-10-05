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
				<span>
					<h5>Count: {this.state.count}</h5>
					<Incrementer count={this.state.count} onClick={this.incrementHandler} />
					<Decrementer count={this.state.count} onClick={this.decrementHandler} />
				</span>
			</div>
		);
	}
});

module.exports = Counter;