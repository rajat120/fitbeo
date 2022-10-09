import React from "react";
import Barchart from "../barchart/Barchart";
import "../cardsection/CardSection.css";
import Footer from "../footer/Footer";

function CardSection() {
	return (
        <>
		<div className="section-container">
			<div className="section-row">
				<div className="section-margin">
					<h4>Overview</h4>
					<p>This Month</p>
					<div className="grid">
						<div className="row-grid">
							<div className="border">
								Orders
								<div>
									<span>5,643</span>
								</div>
							</div>

							<div className="border">
								Sales
								<div>
									<span>16,273</span>
								</div>
							</div>

							<div className="border">
								{" "}
								Order Value
								<div>
									<span>12.03%</span>
								</div>
							</div>

							<div className="border">
								{" "}
								Customers
								<div>
									<span>21,456</span>
								</div>
							</div>

							<div className="border">
								{" "}
								Income
								<div>
									<span>$35,052</span>
								</div>
							</div>
							<div className="border">
								{" "}
								Expenses
								<div>
									<span>$12,248</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bar">
					<Barchart />
				</div>
			</div>
			
		</div>
        
<Footer/>
        </>
	);
}

export default CardSection;
