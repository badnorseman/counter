"use strict";
var React = require("react");

var Decrementer = React.createClass({
	onClickHandler: function() {
		var count = this.props.count - 1;
		this.props.onClick(count);
	},
	render: function() {
		return( 
			<button onClick={this.onClickHandler} type="button" className="btn btn-default" aria-label="Decrement">
				<span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
			</button>
		);
	}
});

module.exports = Decrementer;