import React, { Component } from "react";
import {
	Route,
	NavLink,
	Switch,
	BrowserRouter
} from "react-router-dom";

/* Components */
import Home from "./Components/Home.jsx";
import Wizja from "./Components/Wizja.jsx";
import Program from "./Components/Program.jsx";
import O_mnie from "./Components/O_mnie.jsx";
import Kontakt from "./Components/Kontakt.jsx";
import Error404 from "./Components/Error404.jsx";

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<main>
					<header>
						<div className="title-container">
							<NavLink to="/"><h1 className="title">Bartłomiej Jarzembiński</h1></NavLink>
							<h2 className="subtitle">Kandydat na radnego</h2>
						</div>
						<nav>
							<ul className="navbar">
								<li><NavLink to="/">Strona główna</NavLink></li>
								<li><NavLink to="/wizja">Wizja</NavLink></li>
								<li><NavLink to="/program">Program</NavLink></li>
								<li><NavLink to="/o-mnie">O mnie</NavLink></li>
								<li><NavLink to="/kontakt">Kontakt</NavLink></li>
							</ul>
						</nav>
					</header>
					<section className="container">
						<article>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/wizja" component={Wizja}/>
								<Route path="/program" component={Program}/>
								<Route path="/o-mnie" component={O_mnie}/>
								<Route path="/kontakt" component={Kontakt}/>
								<Route component={Error404} />
							</Switch>
						</article>
						<aside>
							<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
								<blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
									<a href="https://www.facebook.com/facebook">Facebook</a>
								</blockquote>
							</div>
						</aside>
					</section>
				</main>
			</BrowserRouter>
		);
	}
}

export default App;