import React from "react";
import "../footer/Footer.css";
import Piechart from "../piechart/Piechart";
import Productdetail from "../productdetail/Productdetail";
import Serieschart from "../serieschart/Serieschart";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<Serieschart />
			</div>
			<div className="footer-container">
				<Piechart />
			</div>
			<div className="footer-container">
				<Productdetail />
			</div>
		</div>
	);
}

export default Footer;
