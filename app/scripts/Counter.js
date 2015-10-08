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
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-offset-5">
						<h3>Counter</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-1 col-md-offset-5">
						<Decrementer count={this.state.count} onClick={this.decrementHandler} />
					</div>
					<div className="col-xs-12 col-md-1">
						<h3>{this.state.count}</h3>
					</div>
					<div className="col-xs-12 col-md-1">
						<Incrementer count={this.state.count} onClick={this.incrementHandler} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Counter;