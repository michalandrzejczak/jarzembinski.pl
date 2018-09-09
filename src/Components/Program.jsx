import React, { Component } from "react";

class Program extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="program-section">
				<h2><span className="anim-fadein-heading">Program</span></h2>
				<div className="card-container">
					<h3 className="card-title">Dialog z mieszkańcami</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
				<div className="card-container">
					<h3 className="card-title">Przyjazny urząd</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
				<div className="card-container">
					<h3 className="card-title">Świeże powietrze</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
				<div className="card-container">
					<h3 className="card-title">Prosta edukacja</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
				<div className="card-container">
					<h3 className="card-title">Sport to zdrowie</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
				<div className="card-container">
					<h3 className="card-title">Rozwój dla każdego</h3>
					<p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia minus quibusdam a quae laboriosam, incidunt vitae harum voluptatibus sit!</p>
				</div>
			</div>
		);
	}
}

export default Program;