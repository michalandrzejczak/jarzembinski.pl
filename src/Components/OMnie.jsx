import React, { Component } from "react";

import aboutme from "../assets/aboutme.jpg"

class O_mnie extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="o_mnie-section">
				<h2><span className="anim-fadein-heading">O mnie</span></h2>
				<div className="text-container">
					<img src={aboutme} alt="aboutme.jpg" className="anim-fadein-text"/>
					<p className="anim-fadein-text">
						Jestem absolwentem Automatyki i Robotyki na Politechnice Gdańskiej. Zostałem nagrodzony Złotą Odznaką Absolwenta Politechniki Gdańskiej. Obecnie jestem studentem ostatniego semestru studiów licencjackich z Ekonomii na specjalizacji Polityka Gospodarcza i Strategia Przedsiębiorczości. Pracuję w dużej firmie informatycznej znajdującej się przy gdańskim lotnisku.
					</p>
					<p className="anim-fadein-text">
						Od dawna pomagałem osobom w moim otoczeniu. Byłem przewodniczącym samorządu szkolnego, przewodniczącym komisji w Młodzieżowej Radzie Miasta, a obecnie pełnię funkcję radnego dzielnicy Pustki Cisowskie – Demptowo. Cechuję się bardzo dobrą organizacją pracy.
					</p>
					<p className="anim-fadein-text">
						Na Pustkach Cisowskich spędziłem całe swoje życie. Dlatego dostrzegam potrzeby Chyloni, Cisowej, Pustek oraz Demptowa i chcę wykorzystać moją młodość i energię na pracę na rzecz tych dzielnic i całej Gdyni.
					</p>
					<p className="anim-fadein-text">
						W Gdyni żyje się dobrze - to nie tylko zasługa władz, ale przede wszystkim mieszkańców. Zatem powinni oni mieć realny wpływ na rozwój miasta. Lubię spędzać czas na dialogu z sąsiadami, a więc w roli radnego odnajdę się znakomicie.
					</p>
				</div>
			</div>
		);
	}
}

export default O_mnie;