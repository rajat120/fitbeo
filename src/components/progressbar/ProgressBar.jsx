import React from "react";
import "../progressbar/ProgressBar.css";

export default function ProgressBar() {
	return (
		<>
			<div className="progress">
				<div className="outer">
					<div className="inner"></div>
					<div className="percent">76%</div>
				</div>
			</div>

			<div className="progress-status">
				<p>$26,356</p>
				<p>Earning this month</p>
				<p>+2.62% From previous period </p>
			</div>
			<div className="line-hrzn"></div>
			<div className="head">Recent Activity</div>
			<div className="card-info">
				<div className="row-card">
					<p className="small-card">12 Sep</p>
					<p className="space"> Responded to need "Volunteer Activities"</p>
					<div></div>
				</div>
			</div>
			<div className="card-info">
				<div className="row-card">
					<p className="small-card">11 Sep</p>
					<p className="space"> Everyone realizes would be desriables...</p>
				</div>
			</div>
			<div className="card-info">
				<div className="row-card">
					<p className="small-card">10 Sep</p>
					<p className="space"> Joined the group as "Broadmanship Forum"</p>
					<div></div>
				</div>
			</div>
		</>
	);
}
