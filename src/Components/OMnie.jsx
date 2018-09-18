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
						Jestem młodym, ambitnym mieszkańcem Gdyni. Mieszkam na Pustkach Cisowskich praktycznie od zawsze. To moje miejsce na ziemi i chciałbym, by zmieniało się na lepsze zgodnie z oczekiwaniami mieszkańców. Potrafię o te zmiany walczyć i do nich przekonywać. Mimo młodego wieku, mam duże doświadczenie w pracy społecznej. Od dawna pomagałem osobom w moim otoczeniu. Byłem przewodniczącym samorządu szkolnego, przewodniczącym komisji w Młodzieżowej Radzie Miasta, a od 4 lat jestem radnym dzielnicy Pustki Cisowskie-Demptowo.
					</p>
					<p className="anim-fadein-text">
						Umiem dobrze organizować pracę swoją i zespołów, bez problemu radziłem sobie z łączeniem pracy zawodowej i studiów dziennych. Lubię podejmować nowe wyzwania i traktuję je poważnie.
					</p>
					<p className="anim-fadein-text">
						Jestem absolwentem automatyki i robotyki na Politechnice Gdańskiej, nagrodzonym Złotą Odznaką Absolwenta. Obecnie studiuję na ostatnim semestrze studiów licencjackich z ekonomii na specjalizacji Polityka Gospodarcza i Strategia Przedsiębiorczości, a także pracuję w dużej firmie informatycznej. W sierpniu rozpocząłem nowy etap w moim życiu, biorąc ślub.
					</p>
					<p className="anim-fadein-text">
						Na Pustkach Cisowskich spędziłem całe swoje życie. Dostrzegam potrzeby Chyloni, Cisowej, Pustek oraz Demptowa i chcę wykorzystać moja młodość i energię do pracy na rzecz tych dzielnic i całej Gdyni.
					</p>
					<p className="anim-fadein-text">
						W Gdyni żyje się dobrze – to zasługa przede wszystkim mieszkańców. Zatem powinni oni mieć realny wpływ na rozwój miasta. Cenię dialog, lubię słuchać mieszkańców i pracować dla nich – jestem gotowy podejmować kolejne wyzwania, by zmieniać nasze miasto i dzielnice. Wierzę, że zmiana jest możliwa. Potrzebna jest nowa energia i lepsze wykorzystanie potencjału miasta i ludzi.
					</p>
				</div>
			</div>
		);
	}
}

export default O_mnie;