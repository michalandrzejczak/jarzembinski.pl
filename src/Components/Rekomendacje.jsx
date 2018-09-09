import React, { Component } from "react";

class Rekomendacje extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="rekomendacje-section">
				<h2><span className="anim-fadein-heading">Rekomendacje</span></h2>
			</div>
		);
	}
}

export default Rekomendacje;