import React, { Component } from "react";

// photos:
import ad from "../assets/rekomendacje/ad.jpg"
import tp from "../assets/rekomendacje/tp.jpg"
import pb from "../assets/rekomendacje/pb.jpg"
import pg from "../assets/rekomendacje/pg.jpg"
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
						<img src={ad} alt="Artur Dziambor JPG" className="anim-fadein-scaleout"/>
						<h4 className="person-name anim-fadein-scaleout">Artur Dziambor</h4>
						<span className="person-whois anim-fadein-text">radny dzielnicy Cisowa</span>
						<p className="description-wrapper anim-fadein-text">
							Czasem spotyka się takich ludzi, z którymi wystarczy zamienić kilka zdań, aby dojść do wniosku, że chciałoby się z nimi współpracować. Bartka poznałem wiele lat temu, gdy był jeszcze bardzo młody, a już wyjątkowo aktywny. Od samego początku bardzo mu zależało aby wprowadzać wielkie pozytywne zmiany i aby być kreatorem otaczającej nas rzeczywistości. Jestem przekonany, że doświadczenie zdobyte przez lata pracy na rzecz jego dzielnicy, zostanie doskonale wykorzystane na rzecz wszystkich mieszkańców Gdyni. Przed Bartkiem kampania wyborcza. Koleżanek i kolegów przekonywać nie musiał, swojego kandydata mają od momentu gdy ogłosił start. Trzymam kciuki za to aby Gdynianie, którzy nie mieli okazji poznać Bartka osobiście, obdarzyli go podobnym zaufaniem.
						</p>
					</div>
					<div className="person-wrapper">
						<img src={pg} alt="Przemysław Grenda JPG" className="anim-fadein-scaleout"/>
						<h4 className="person-name anim-fadein-scaleout">Przemysław Grenda</h4>
						<span className="person-whois anim-fadein-text">radny dzielnicy Chylonia</span>
						<p className="description-wrapper anim-fadein-text">
							Chęć pracy na rzecz lokalnej społeczności to cecha, która w rodzinie Bartka jest głęboko zakorzeniona, doskonale wiedzą o tym mieszkańcy jego rodzimej dzielnicy Pustki Cisowskie-Demptowo, do której rozwoju od 4 latach przyczynia się w ramach działań Rady Dzielnicy. Jego hobbistyczne zacięcie związane z polityką i ekonomią sięgające lat szkolnych przerodziło się w studia w tym kierunku oraz ostatecznie w bardzo dobrze ugruntowaną wiedzę, która wraz z analitycznym i pełnym pomysłów umysłem przyczyni się – jestem pewien, do pracy w Radzie Miasta na najwyższym możliwym poziomie.
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
							Bartka znam już od ponad 10 lat. Od kiedy pamiętam wspierał osoby w swoim otoczeniu i starał się działać dla dobra lokalnej społeczności. Robił to solidnie i z godnym podziwu zaangażowaniem. Mam nadzieję, że w Radzie Miasta Gdyni znajdą się osoby właśnie takie jak Bartek. Gdynia tego potrzebuje :).
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Rekomendacje;