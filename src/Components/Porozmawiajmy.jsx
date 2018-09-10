import React, { Component } from "react";

class Porozmawiajmy extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="porozmawiajmy-section">
				<h2><span className="anim-fadein-heading">Porozmawiajmy o Gdyni</span></h2>
				<iframe title="porozmawiajmy-survey" src="https://docs.google.com/forms/d/e/1FAIpQLSdMxQmH5wJCzRbUvPkgX7TgVr9Pq6uyeCgqPuFiAeQmPayXmw/viewform?embedded=true" height ="800" frameBorder="0" marginHeight="0" marginWidth="0">Ładuję...</iframe>
			</div>
		);
	}
}

export default Porozmawiajmy;