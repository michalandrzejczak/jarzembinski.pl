import React, { Component } from "react";

class Home extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div>
				<h2>Strona w przygotowaniu</h2>
				<img height="200px" width="200px" src="underconstruction.gif" alt="Under construction gif" />
			</div>
		);
	}
}

export default Home;