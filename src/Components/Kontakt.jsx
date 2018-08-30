import React, { Component } from "react";

class Kontakt extends Component {
	render() {
		return (
			<div id="kontakt-section">
				<h2>Kontakt</h2>
				<div className="method-wrapper">
					<a href="mailto:">
						<i className="fas fa-paper-plane"></i>
						Wyślij mi e-mail
					</a>
				</div>
				lub
				<div className="method-wrapper">
					facebook send widget here
					<div className="fb-send" 
						data-href="http://www.jarzembinski.pl/kontakt" 
						data-layout="button_count">
					</div>
				</div>
			</div>
		);
	}
}

export default Kontakt;