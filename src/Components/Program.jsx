import React, { Component } from "react";

class Program extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="program-section">
				<h2><span className="anim-fadein-heading">Program</span></h2>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Inwestycje</h3>
					<p className="card-paragraph">• <span class="card-special">remont Placu Dworcowego w Chyloni</span> w celu utworzenia nowoczesnego węzła ko­mu­ni­ka­cyj­ne­go</p>
					<p className="card-paragraph">• <span class="card-special">bezkolizyjny przejazd przez tory między ul. Chylońską, a ul. Hutniczą</span></p>
					<p className="card-paragraph">• analiza możliwości al­ter­na­tyw­ne­go połączenia drogowego dla Pustek Cisowskich</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Miasto obywatelskie</h3>
					<p className="card-paragraph">• większy udział mieszkańców w zarządzaniu miastem (zwięk­sze­nie budżetów Rad Dzielnic i <span class="card-special"> Budżetu Obywatelskiego</span>)</p>
					<p className="card-paragraph">• <span class="card-special">obniżka lokalnych podatków</span> (opłaty targowej i podatku od nieruchomości)</p>
					<p className="card-paragraph">• racjonalne wydawanie pu­blicz­nych pieniędzy</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Dialog</h3>
					<p className="card-paragraph">• konsultacje społeczne pro­wa­dzo­ne przez miasto m.in. w oparciu o głosowanie elek­tro­nicz­ne (np. na stronie BO)</p>
					<p className="card-paragraph">• wizje lokalne z mieszkańcami w celu omówienia lokalnych potrzeb</p>
					<p className="card-paragraph">• wsłuchiwanie się w głos mieszkańców odnośnie decyzji podejmowanych przez miasto</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Dzielnice</h3>
					<p className="card-paragraph">• więcej inwestycji na Chyloni, Cisowej, Pustkach i Demptowie (koniec z odwlekaniem pro­jek­tów i pomijaniem naszych dzielnic w planie inwestycyjnym miasta)</p>
					<p className="card-paragraph">• kontrolowanie terminowości inwestycji (m.in. projektów Budżetu Obywatelskiego oraz zadań inwestycyjnych rad dziel­nic) w celu uniknięcia opóźnień</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Potrzeby mieszkańców</h3>
					<p className="card-paragraph">• ogólna poprawa stanu dróg i chodników</p>
					<p className="card-paragraph">• większa dostępność miejsc w publicznych żłobkach</p>
					<p className="card-paragraph">• nowoczesne, kreatywne i nieszablonowe place zabaw</p>
					<p className="card-paragraph">• dbałość o miejsca wypoczynku i rekreacji w dzielnicach</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Przyjazna przestrzeń</h3>
					<p className="card-paragraph">• <span class="card-special">zagospodarowanie terenu byłego domu dziecka na Demptowie</span> jako funkcjonalnej i ogólnodostępnej przestrzeni</p>
					<p className="card-paragraph">• utworzenie osiedlowych stref zieleni i <span class="card-special">parków kieszonkowych</span></p>
					<p className="card-paragraph">• likwidacja barier ar­chi­tek­to­nicz­nych dla osób nie­peł­no­spraw­nych</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Komunikacja</h3>
					<p className="card-paragraph">• <span class="card-special">przedłużenie linii PKM do Chyloni</span></p>
					<p className="card-paragraph">• lepsza integracja komunikacji miejskiej (np. autobusy z SKM)</p>
					<p className="card-paragraph">• decyzje oparte na wie­lo­aspek­to­wej analizie (zdanie miesz­kań­ców, racjonalność, koszty i wpływ na środowisko naturalne)</p>
					<p className="card-paragraph">• analiza montażu biletomatów</p>
					<p className="card-paragraph">• zwiększenie liczby parkingów</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Przejrzystość działań</h3>
					<p className="card-paragraph">• ranking przyszłych inwestycji, aby mieszkańcy i rady dzielnic wiedzieli jakich przedsięwzięć się spodziewać</p>
					<p className="card-paragraph">• konsultowanie z miesz­kań­ca­mi tematów obrad Rady Miasta</p>
					<p className="card-paragraph">• uproszczona wersja budżetu miasta przystępnie pre­zen­tu­ją­ca wydatki miasta</p>
				</div>
				<div className="card-container anim-fadein-scaleout">
					<h3 className="card-title">Współpraca</h3>
					<p className="card-paragraph">• sprawniejsza koordynacja remontów w dzielnicach</p>
					<p className="card-paragraph">• popieranie wszystkich do­brych pomysłów bez względu na autorstwo</p>
					<p className="card-paragraph">• uczestnictwo w sesjach rad dzielnic</p>
					<p className="card-paragraph">• wymiana dobrych praktyk i wzajemnych inspiracji z sa­mo­rzą­dow­ca­mi z innych miast</p>
				</div>
			</div>
		);
	}
}

export default Program;