"use strict";
var React = require("react");

var Incrementer = React.createClass({
	onClickHandler: function() {
		var count = this.props.count + 1;
		this.props.onClick(count);
	},
	render: function() {
		return( 
			<button ref="button" onClick={this.onClickHandler} type="button" className="btn btn-default" aria-label="Increment">
				<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
			</button>
		);
	}
});

module.exports = Incrementer;