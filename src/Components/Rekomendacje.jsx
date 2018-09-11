import React, { Component } from "react";

// photos:
import tp from "../assets/rekomendacje/tp.jpg"
import pb from "../assets/rekomendacje/pb.jpg"
import zzt from "../assets/rekomendacje/zzt.jpg"

class Rekomendacje extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="rekomendacje-section">
				<h2><span className="anim-fadein-heading">Rekomendacje</span></h2>
				<div className="content-container">
					<div className="person-wrapper">
						<img src={zzt} alt="Zygmunt Zmuda Trzebiatowski JPG" className="anim-fadein-scaleout"/>
						<h4 className="person-name anim-fadein-scaleout">Zygmunt Zmuda Trzebiatowski</h4>
						<span className="person-whois anim-fadein-text">wiceprzewodniczący Rady Miasta Gdyni</span>
						<p className="description-wrapper anim-fadein-text">
							Bartek to uśmiechnięty, pogodny i zaangażowany młody człowiek, którego każdy chciałby mieć w swoim zespole. Żyje problemami swojej dzielnicy i skutecznie je rozwiązuje. Po 4 latach pracy dla swojej dzielnicy, jest gotów na więcej, a ja bardzo liczę, że dostanie taką możliwość. Znam od lat, obserwuję w działaniu, popieram, trzymam kciuki i zachęcam do głosowania na Bartka. Takich ludzi potrzebuję gdyńska rada miasta!
						</p>
					</div>
					<div className="person-wrapper">
						<img src={pb} alt="Paweł Borkowski JPG" className="anim-fadein-scaleout"/>
						<h4 className="person-name anim-fadein-scaleout">Paweł Borkowski</h4>
						<span className="person-whois anim-fadein-text">redaktor naczelny Jestem z Gdyni</span>
						<p className="description-wrapper anim-fadein-text">
							Lewandowski jest piłkarzem od którego każdy trener zacząłby ustalanie swojego składu. Podobnie jest z Bartkiem. Życzyłbym każdemu, kto zaczyna dowolny projekt społeczno-polityczny aby miał możliwość otwierać swój zespół taką osobą. Profesjonalizm idzie tutaj w parze z zaangażowaniem... i uśmiechem którym zaraża i motywuje innych. Będąc mieszkańcem okręgu nr 2 nie miałbym wątpliwości - Bartek to pewność dobrego wyboru.
						</p>
					</div>
					<div className="person-wrapper">
						<img src={tp} alt="Tomasz Prabucki JPG" className="anim-fadein-scaleout"/>
						<h4 className="person-name anim-fadein-scaleout">Tomasz Prabucki</h4>
						<span className="person-whois anim-fadein-text">przewodniczący Młodzieżowej Rady Miasta Gdyni III kadencji</span>
						<p className="description-wrapper anim-fadein-text">
							Bartka znam już od ponad 10 lat. Od kiedy pamiętam wspierał rówieśników potrzebujących pomocy i starał się działać dla dobra lokalnej społeczności. Robił to solidnie i z godnym podziwu zaangażowaniem. Mam nadzieję, że w Radzie Miasta Gdyni znajdą się osoby właśnie takie jak Bartek. Gdynia tego potrzebuje :).
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Rekomendacje;