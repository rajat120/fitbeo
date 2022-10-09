import React from "react";
import "../productdetail/Productdetail.css";

function Productdetail() {
	return (
		<div className="product-container">
			<div className="header-title">
				<div className="details">
					<div>
						<p>Top Product</p>
					</div>
					<div>
						<p>Monthly</p>
					</div>
				</div>
				<div className="product-row">
					<div className="blue-icon">#1</div>
					<div className="product">
						<div>Polo blue T-shirt</div>
						<div className="bold">$25.4</div>
					</div>
					<div className="margin">3.82k</div>
				</div>
				<div className="product-row">
					<div className="blue-icon">#2</div>
					<div className="product">
						<div>Hoodie for men</div>
						<div className="bold">$24.5</div>
					</div>
					<div className="margin">3.14k</div>
				</div>
				<div className="product-row">
					<div className="blue-icon">#3</div>
					<div className="product">
						<div>Red color Cap</div>
						<div className="bold">$22.5</div>
					</div>
					<div className="margin">2.84k</div>
				</div>
				<div className="product-row">
					<div className="blue-icon">#4</div>
					<div className="product">
						<div>Pocket T-shirt</div>
						<div className="bold">$20.4</div>
					</div>
					<div className="margin">2.06k</div>
				</div>
			</div>
		</div>
	);
}

export default Productdetail;
