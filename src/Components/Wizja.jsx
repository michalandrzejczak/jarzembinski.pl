import React, { Component } from "react";

class Wizja extends Component {
	render() {
		return (
			<div>
				<h2>Wizja</h2>
				<div className="text-container">
					<div className="para_align-left">
					Moja Gdynia to miasto otwarte, obywatelskie i działające na przejrzystych zasadach.
					</div>
					<div className="para_align-right ">
						Miasto, które uczciwie przeprowadza konsultacje z mieszkańcami, przede wszystkim na wrażliwe i ważne dla społeczności lokalnej tematy.
					</div>
					<div className="para_align-left">
						Moja Gdynia korzysta z zaangażowania osób pracujących na jej rzecz, nie zważając na partyjne i inne nieistotne podziały. 
					</div>
					<div className="para_align-right ">
						Moja Gdynia to także miasto, które dba o wszystkie swoje dzielnice i swoją uwagę poświęca nie tylko projektom ogólnomiejskim, ale także służącym konkretnym dzielnicom.
					</div>
				</div>
			</div>
		);
	}
}

export default Wizja;