import React, { Component } from "react";

class Home extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="home-section">
				<h2><span className="anim-fadein-heading">Strona główna</span></h2>
				<div className="text-container">
					<p className="home-para-heading">
						Witaj na mojej stronie
					</p>
					<p className="home-para">
						Biorąc pod uwagę ile materiałów wyborczych przewija się w trakcie kampanii wyborczej <span className="home-special">jestem zaszczycony, że tutaj jesteś</span>.
					</p>
					<p className="home-para">
						Zapraszam do poczytania o mnie i moich postulatach.
					</p>
					<p className="home-para">
						Zachęcam również do rozmów o Gdyni i jej dzielnicach.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;