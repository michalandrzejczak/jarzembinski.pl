import React, { Component } from "react";
import {
	Route,
	NavLink,
	Switch,
	BrowserRouter
} from "react-router-dom";
import ScrollEvent from 'react-onscroll';

/* Components */
import Home from "./Components/Home.jsx";
import Wizja from "./Components/Wizja.jsx";
import Program from "./Components/Program.jsx";
import OMnie from "./Components/OMnie.jsx";
import Rekomendacje from "./Components/Rekomendacje.jsx"
import Porozmawiajmy from "./Components/Porozmawiajmy.jsx"
import Kontakt from "./Components/Kontakt.jsx";
import Error404 from "./Components/Error404.jsx";

class App extends Component {
	constructor(props) {
		super(props);

		this.handleScrollShowArrow = this.handleScrollShowArrow.bind(this);
		
		this.toggleAnimations = this.toggleAnimations.bind(this);
		
	}

	handleScrollShowArrow() {
		const $ = require("jquery");
		if (window.pageYOffset>450) {
			$("#scrollToTopArrow").addClass("show-arrow");
		}  else {
			$("#scrollToTopArrow").removeClass("show-arrow");
		}
	}
	
	toggleAnimations()	{
		const $ = require("jquery");

		const ScrollMagic = require("scrollmagic");

		const animations = $("*[class*='anim']");

		animations.each(triggerAnimOnElement);

		function triggerAnimOnElement() {

			const controller = new ScrollMagic.Controller();
		 	new ScrollMagic.Scene({

				triggerElement: this,
				triggerHook: 0.9,
				reverse: false

			})
			.setClassToggle(this, "animationToggle")
			.addTo(controller);
		}
	}
	
	componentDidMount() {
		this.toggleAnimations();	
	}
			
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<main>
					<ScrollEvent handleScrollCallback={this.handleScrollShowArrow} />
					<header>
						<div className="title-container">
							<NavLink to="/">
								<h1 className="title">Bartłomiej Jarzembiński</h1>
							</NavLink>
							<h2 className="subtitle">Kandydat na radnego</h2>
						</div>
						<nav>
							<ul className="navbar">
								<li><NavLink exact to="/">Strona główna</NavLink></li>
								<li><NavLink to="/wizja">Wizja</NavLink></li>
								<li><NavLink to="/program">Program</NavLink></li>
								<li><NavLink to="/o-mnie">O mnie</NavLink></li>
								<li><NavLink to="/rekomendacje">Rekomendacje</NavLink></li>
								<li><NavLink to="/porozmawiajmy">Porozmawiajmy o Gdyni</NavLink></li>
								<li><NavLink to="/kontakt">Kontakt</NavLink></li>
							</ul>
							<button className="hamburger hamburger--squeeze" id="ham-menu" type="button" aria-label="Menu" aria-controls="navigation">
								<span className="hamburger-box">
									<span className="hamburger-inner"></span>
								</span>
							</button>
						</nav>
					</header>
					<div className="wrapper">
						<section className="container">
							<article>
								<Switch>
									<Route exact path="/" render={()=><Home toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/wizja" render={()=><Wizja toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/program" render={()=><Program toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/o-mnie" render={()=><OMnie toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/rekomendacje" render={()=><Rekomendacje toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/porozmawiajmy" render={()=><Porozmawiajmy toggleAnimations={this.toggleAnimations}/>}/>
									<Route path="/kontakt" render={()=><Kontakt toggleAnimations={this.toggleAnimations}/>}/>
									<Route component={Error404} />
								</Switch>
							</article>
							<aside>
								<div className="fb-page main-widget" data-href="https://www.facebook.com/bjarzembinski" data-tabs="timeline" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
								<div className="fb-page small-widget" 
									data-href="https://www.facebook.com/bjarzembinski"
									data-width="280" 
									data-hide-cover="false"
									data-show-facepile="false"></div>
							</aside>
						</section>
					</div>
					<footer>
						Projekt<a href="http://michalandrzejczak.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left">Michał Andrzejczak</a> &copy; 2018 
					</footer>
					<a id="scrollToTopArrow"><i className="fas fa-arrow-up"></i></a>
				</main>
			</BrowserRouter>
		);
	}
}

export default App;