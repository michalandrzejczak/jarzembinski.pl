import React, { Component } from "react";

class Home extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="home-section">
				<h2><span className="anim-fadein-heading">Strona główna</span></h2>
				<p class="home-para-heading">
					Witaj na mojej stronie
				</p>
				<p class="home-para">
					Biorąc pod uwagę ile materiałów wyborczych przewija się w trakcie kampanii wyborczej <span class="home-special">jestem zaszczycony, że tutaj jesteś</span>.
				</p>
				<p class="home-para">
					Zapraszam do poczytania o mnie i moich postulatach.
				</p>
				<p class="home-para">
					Zachęcam również do rozmów o Gdyni i jej dzielnicach.
				</p>
				
			</div>
		);
	}
}

export default Home;