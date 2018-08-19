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

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<header>
					<NavLink to="/"><h1>Bartłomiej Jarzembiński</h1></NavLink>
					<h2>Kandydat na radnego</h2>
					<ul className="header">
						<li><NavLink to="/">Strona główna</NavLink></li>
						<li><NavLink to="/wizja">Wizja</NavLink></li>
						<li><NavLink to="/program">Program</NavLink></li>
						<li><NavLink to="/o-mnie">O mnie</NavLink></li>
						<li><NavLink to="/kontakt">Kontakt</NavLink></li>
					</ul>
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/wizja" component={Wizja}/>
							<Route path="/program" component={Program}/>
							<Route path="/o-mnie" component={O_mnie}/>
							<Route path="/kontakt" component={Kontakt}/>
							<Route component={() => (<div>Error 404. Nie znaleziono.</div>)} />
						</Switch>
					</div>
				</header>
			</BrowserRouter>
		);
	}
}

export default App;