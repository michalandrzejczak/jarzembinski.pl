import React, { Component } from "react";

class Kontakt extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="kontakt-section">
				<h2><span className="anim-fadein-heading">Kontakt</span></h2>
				<div className="method-wrapper">
					<a href="mailto:example@example.com">
						<i className="fas fa-paper-plane"></i>
						Wyślij mi e-mail<br/>
						<span className="e-mail">example@example.com</span>
					</a>
				</div>
				lub
				<div className="method-wrapper">
				
					<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbjarzembinski&tabs=messages&width=250&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="250" height="350" title="fb-message-widget" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
				</div>
			</div>
		);
	}
}

export default Kontakt;