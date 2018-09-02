import React, { Component } from "react";

class Kontakt extends Component {
	render() {
		return (
			<div id="kontakt-section">
				<h2>Kontakt</h2>
				<div className="method-wrapper">
					<a href="mailto:example@example.com">
						<i className="fas fa-paper-plane"></i>
						Wyślij mi e-mail<br/>
						<span className="e-mail">example@example.com</span>
					</a>
				</div>
				lub
				<div className="method-wrapper">
				
					<iframe title="facebook-message-widget" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=messages&width=250&height=350&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width="250" height="350" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
				</div>
			</div>
		);
	}
}

export default Kontakt;