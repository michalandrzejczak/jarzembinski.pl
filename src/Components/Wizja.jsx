import React, { Component } from "react";

class Wizja extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}
	
	render() {
		return (
			<div id="wizja-section">
				<h2><span className="anim-fadein-heading">Wizja</span></h2>
				<div className="text-container">
					<div className="para_header anim-fadein-scaleout">
						Jako Radny będę podejmować dialog z mieszkańcami, aby jak najlepiej poznać ich oczekiwania i problemy. Chcę wykorzystać moją młodość i energię na pracę na rzecz Gdyni. Będę aktywnie i z pasją realizować i wspierać projekty dotyczące naszego miasta.
					</div>
					<div className="para_align-left anim-slideleft">
						<strong>Moja Gdynia</strong> to miasto otwarte, obywatelskie i działające na przejrzystych zasadach.
					</div>
					<div className="para_align-right anim-slideright">
						<strong>Moja Gdynia</strong> to miasto, które uczciwie przeprowadza konsultacje społeczne. Mieszkańcy powinni być pytani o zdanie w kwestiach wrażliwych i istotnych dla lokalnej społeczności.
					</div>
					<div className="para_align-left anim-slideleft">
						<strong>Moja Gdynia</strong> korzysta z zaangażowania osób pracujących na jej rzecz, nie zważając na partyjne i inne nieistotne podziały. 
					</div>
					<div className="para_align-right anim-slideright">
						<strong>Moja Gdynia</strong> to miasto, które dba o wszystkie swoje dzielnice i swoją uwagę poświęca nie tylko projektom ogólnomiejskim, ale także służącym konkretnym dzielnicom.
					</div>
				</div>
			</div>
		);
	}
}

export default Wizja;